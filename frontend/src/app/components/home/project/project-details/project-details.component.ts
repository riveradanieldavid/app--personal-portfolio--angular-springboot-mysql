import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/_services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/_models/project.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})

export class ProjectDetailsComponent implements OnInit {
  // ATTRIBUTES
  @Input() viewMode = false;
  @Input() currentProject: Project = {
    title: '',
    description: ''
  };
  message = '';
  // CONSTRUCTOR
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router) { }
  // DATA AVAILABLE
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getProject(this.route.snapshot.params["id"]);
    }
  }
  // GET DATA FROM DB
  getProject(id: string): void {
    this.projectService.get(id)
      .subscribe({
        next: (data) => {
          this.currentProject = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  // UPDATE DATA AND PUT IN DB
  updateProject(): void {
    this.message = '';
    this.projectService.update(this.currentProject.id, this.currentProject)
      .subscribe({
        next: (res) => {
          console.log(res);
          // ADDED
          this.router.navigate(['/projects']);
          // ADDED /
          // this.message = res.message ? res.message : 'This project was updated successfully!'; // ORIGINAL
        },
        error: (e) => console.error(e)
      });
  }
  // DELETE DATA FROM DB
  deleteProject(): void {
    this.projectService.delete(this.currentProject.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/projects']);
        },
        error: (e) => console.error(e)
      });
  }

}