import { Component } from '@angular/core';
import { Project } from 'src/app/_models/project.model';
import { ProjectService } from 'src/app/_services/project.service';
// ADDED
import { ActivatedRoute, Router } from '@angular/router';
// ADDED /

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})

export class AddProjectComponent {
  // ATTRIBUTES
  project: Project = {
    title: '',
    description: ''
  };
  submitted = false;
  // CONSTRUCTOR
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router) { }
  // SAVE DATA
  saveProject(): void {
    const data = {
      title: this.project.title,
      description: this.project.description
    };
    // SERVICE
    this.projectService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          // ADDED
          this.router.navigate(['/projects']);
          // ADDED /
          // this.submitted = true; // ORIGINAL
        },
        error: (e) => console.error(e)
      });
  }

  newProject(): void {
    this.submitted = false;
    this.project = {
      title: '',
      description: ''
    };
  }

}

