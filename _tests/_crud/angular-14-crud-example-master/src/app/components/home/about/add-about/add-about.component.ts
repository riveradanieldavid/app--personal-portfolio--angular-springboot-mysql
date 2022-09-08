import { Component } from '@angular/core';
import { About } from 'src/app/_models/about.model';
import { AboutService } from 'src/app/_services/about.service';

@Component({
  selector: 'app-add-about',
  templateUrl: './add-about.component.html',
  styleUrls: ['./add-about.component.css']
})
export class AddAboutComponent {

  about: About = {
    title: '',
    description: ''
  };
  submitted = false;

  constructor(private aboutService: AboutService) { }

  saveAbout(): void {
    const data = {
      title: this.about.title,
      description: this.about.description
    };

    this.aboutService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
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