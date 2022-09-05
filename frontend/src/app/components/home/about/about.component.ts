import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/_models/about.model';
import { AboutService } from 'src/app/_services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  abouts?: About[];
  currentAbout: About = {};
  currentIndex = -1;
  title = '';

  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.retrieveAbouts();
  }

  retrieveAbouts(): void {
    this.aboutService.getAll()
      .subscribe({
        next: (data) => {
          this.abouts = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveAbouts();
    this.currentAbout = {};
    this.currentIndex = -1;
  }

  setActiveAbout(about: About, index: number): void {
    this.currentAbout = about;
    this.currentIndex = index;
  }




}
