import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/_models/experience.model';
import { ExperienceService } from 'src/app/_services/experience.service';
// ADDED
import { TokenStorageService } from 'src/app/_services/token-storage.service';
// ADDED /

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  // ATTRIBUTES
  experience?: Experience[];
  ccccurrentExperience: Experience = {};
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
  constructor(
    private experienceService: ExperienceService,
    // ADDED
    private tokenStorageService: TokenStorageService
  ) // ADDED /
  { }

  // DATA AVAILABLE
  ngOnInit(): void {
    this.retrieveExperience();
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
  retrieveExperience(): void {
    this.experienceService.getAll().subscribe({
      next: (data) => {
        this.experience = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  refreshList(): void {
    this.retrieveExperience();
    this.ccccurrentExperience = {};
    this.currentIndex = -1;
  }
  // SHOW ARTICE TO EDIT
  setActiveExperience(experience: Experience, index: number): void {
    this.ccccurrentExperience = experience;
    this.currentIndex = index;
  }

}
