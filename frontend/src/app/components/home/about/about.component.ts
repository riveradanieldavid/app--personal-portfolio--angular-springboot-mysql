import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/_models/about.model';
import { AboutService } from 'src/app/_services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about?: About[];
  ccccurrentAbout: About = {};
  currentIndex = -1;
  title = '';

  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.retrieveAbout();
  }

  // GET DATA FROM SERVICES TO BE AVAILABLE IN THE HTML FILE
  retrieveAbout(): void {
    this.aboutService.getAll()
      .subscribe({
        next: (data) => {
          this.about = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveAbout();
    this.ccccurrentAbout = {};
    this.currentIndex = -1;
  }

  // SHOW ARTICE TO EDIT
  setActiveAbout(about: About, index: number): void {
    this.ccccurrentAbout = about;
    this.currentIndex = index;
  }

}