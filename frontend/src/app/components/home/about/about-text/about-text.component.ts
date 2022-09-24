import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/_models/about.model';
import { AboutService } from 'src/app/_services/about.service';
// ADDED
import { TokenStorageService } from 'src/app/_services/token-storage.service';
// ADDED /

@Component({
  selector: 'app-about-text',
  templateUrl: './about-text.component.html',
  styleUrls: ['./about-text.component.css']
})

export class AboutTextComponent implements OnInit {
  // ATTRIBUTES
  about?: About[];
  ccccurrentAbout: About = {};
  currentIndex = -1;
  title = '';
  // ADDED
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  // ADDED /
  // HIDE AND SHOW ELEMENT
  element = true;

  // CONSTRUCTOR
  constructor(
    private aboutService: AboutService,
    // ADDED
    private tokenStorageService: TokenStorageService
  ) // ADDED /
  { }

  // DATA AVAILABLE
  ngOnInit(): void {
    this.retrieveAbout();
    // ADDED
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = user.username;
    }
    // ADDED /
  }
  // GET DATA FROM SERVICES TO BE AVAILABLE IN THE HTML FILE
  retrieveAbout(): void {
    this.aboutService.getAll().subscribe({
      next: (data) => {
        this.about = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  refreshList(): void {
    this.retrieveAbout();
    this.ccccurrentAbout = {};
    this.currentIndex = -1;
  }
  // SHOW ARTICE TO EDIT
  setActiveAbout(about: About, index: number): void {
    this.ccccurrentAbout = about;
    this.currentIndex = index;
  }

  // HIDE AND SHOW ELEMENT
  showData() {
    return (this.element = true);
  }
  hideData() {
    return (this.element = false);
  }
  // HIDE AND SHOW ELEMENT/

}


