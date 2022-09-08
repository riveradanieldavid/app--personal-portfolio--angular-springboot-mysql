import { Component } from '@angular/core';
import { About } from 'src/app/_models/about.model';
import { AboutService } from 'src/app/_services/about.service';
// ADDED
import { ActivatedRoute, Router } from '@angular/router';
// ADDED /

@Component({
  selector: 'app-add-about',
  templateUrl: './add-about.component.html',
  styleUrls: ['./add-about.component.css']
})
export class AddAboutComponent {

  // ATTRIBUTES
  about: About = {
    title: '',
    description: ''
  };
  submitted = false;

  // CONSTRUCTOR
  constructor(
    private aboutService: AboutService,
    private route: ActivatedRoute,
    private router: Router) { }

  // SAVE DATA
  saveAbout(): void {
    const data = {
      title: this.about.title,
      description: this.about.description
    };
    this.aboutService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          // ADDED
          this.router.navigate(['/abouts']);
          // ADDED /
          // this.submitted = true; // ORIGINAL
        },
        error: (e) => console.error(e)
      });
  }

  newAbout(): void {
    this.submitted = false;
    this.about = {
      title: '',
      description: ''
    };
  }

}

