import { Component } from '@angular/core';
import { Education } from 'src/app/_models/education.model';
import { EducationService } from 'src/app/_services/education.service';
// ADDED
import { ActivatedRoute, Router } from '@angular/router';
// ADDED /

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})

export class AddEducationComponent {
  // ATTRIBUTES
  education: Education = {
    title: '',
    description: ''
  };
  submitted = false;
  // CONSTRUCTOR
  constructor(
    private educationService: EducationService,
    private route: ActivatedRoute,
    private router: Router) { }
  // SAVE DATA
  saveEducation(): void {
    const data = {
      title: this.education.title,
      description: this.education.description
    };
    // SERVICE
    this.educationService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          // ADDED
          this.router.navigate(['/educations']);
          // ADDED /
          // this.submitted = true; // ORIGINAL
        },
        error: (e) => console.error(e)
      });
  }

  newEducation(): void {
    this.submitted = false;
    this.education = {
      title: '',
      description: ''
    };
  }

}

