import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/_models/skill.model';
import { SkillService } from 'src/app/_services/skill.service';
// ADDED
import { TokenStorageService } from 'src/app/_services/token-storage.service';
// ADDED /

@Component({
  selector: 'app-skill-text',
  templateUrl: './skill-text.component.html',
  styleUrls: ['./skill-text.component.css']
})
export class SkillTextComponent implements OnInit {
  // ATTRIBUTES
  skill?: Skill[];
  ccccurrentSkill: Skill = {};
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
    private skillService: SkillService,
    // ADDED
    private tokenStorageService: TokenStorageService
  ) // ADDED /
  { }

  // DATA AVAILABLE
  ngOnInit(): void {
    this.retrieveSkill();
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
  retrieveSkill(): void {
    this.skillService.getAll().subscribe({
      next: (data) => {
        this.skill = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  refreshList(): void {
    this.retrieveSkill();
    this.ccccurrentSkill = {};
    this.currentIndex = -1;
  }
  // SHOW ARTICE TO EDIT
  setActiveSkill(skill: Skill, index: number): void {
    this.ccccurrentSkill = skill;
    this.currentIndex = index;
  }

}
