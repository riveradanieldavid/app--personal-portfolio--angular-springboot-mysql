import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/_models/project.model';
import { ProjectService } from 'src/app/_services/project.service';
// ADDED
import { TokenStorageService } from '../../../_services/token-storage.service';
// ADDED /

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  // ATTRIBUTES
  project?: Project[];
  ccccurrentProject: Project = {};
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
  constructor(private projectService: ProjectService,
    // ADDED
    private tokenStorageService: TokenStorageService
    // ADDED /
  ) { }

  // DATA AVAILABLE
  ngOnInit(): void {
    this.retrieveProject();
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
  retrieveProject(): void {
    this.projectService.getAll()
      .subscribe({
        next: (data) => {
          this.project = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveProject();
    this.ccccurrentProject = {};
    this.currentIndex = -1;
  }
  // SHOW ARTICE TO EDIT
  setActiveProject(project: Project, index: number): void {
    this.ccccurrentProject = project;
    this.currentIndex = index;
  }

}