import { Component } from '@angular/core';
import { Experience } from 'src/app/_models/experience.model';
import { ExperienceService } from 'src/app/_services/experience.service';
import { ActivatedRoute, Router } from '@angular/router';  // ADDED BY ME


@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent {

  experience: Experience = {
    title: '',
    description: ''
  };
  submitted = false;

  constructor(
    private experienceService: ExperienceService,
    private route: ActivatedRoute,
    private router: Router) { }

  saveExperience(): void {
    const data = {
      title: this.experience.title,
      description: this.experience.description
    };

    this.experienceService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          // ADDED
          this.router.navigate(['/experiences']);
          // ADDED /
          // this.submitted = true; // ORIGINAL
        },
        error: (e) => console.error(e)
      });
  }

  newExperience(): void {
    this.submitted = false;
    this.experience = {
      title: '',
      description: ''
    };
  }

}

