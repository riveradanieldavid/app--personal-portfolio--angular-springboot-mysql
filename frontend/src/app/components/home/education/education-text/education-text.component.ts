import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/_models/education.model';
import { EducationService } from 'src/app/_services/education.service';
// ADDED
import { TokenStorageService } from 'src/app/_services/token-storage.service';
// ADDED /

@Component({
  selector: 'app-education-text',
  templateUrl: './education-text.component.html',
  styleUrls: ['./education-text.component.css']
})
export class EducationTextComponent implements OnInit {

  // ATTRIBUTES
  education?: Education[];
  ccccurrentEducation: Education = {};
  currentIndex = -1;
  title = '';
  // ADDED
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  // ADDED /

  // CONSTRUCTOR
  constructor(private educationService: EducationService,
    // ADDED
    private tokenStorageService: TokenStorageService
    // ADDED /
  ) { }

  // DATA AVAILABLE
  ngOnInit(): void {
    this.retrieveEducation();
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
  retrieveEducation(): void {
    this.educationService.getAll()
      .subscribe({
        next: (data) => {
          this.education = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveEducation();
    this.ccccurrentEducation = {};
    this.currentIndex = -1;
  }
  // SHOW ARTICE TO EDIT
  setActiveEducation(education: Education, index: number): void {
    this.ccccurrentEducation = education;
    this.currentIndex = index;
  }

}
