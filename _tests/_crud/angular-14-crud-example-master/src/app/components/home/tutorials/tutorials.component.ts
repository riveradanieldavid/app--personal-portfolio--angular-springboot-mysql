import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/_models/tutorial.model';
import { TutorialService } from 'src/app/_services/tutorial.service';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {

  tutorials?: Tutorial[];
  ccccurrentTutorial: Tutorial = {};
  currentIndex = -1;
  title = '';

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  // GET DATA FROM SERVICES TO BE AVAILABLE IN THE HTML FILE
  retrieveTutorials(): void {
    this.tutorialService.getAll()
      .subscribe({
        next: (data) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.ccccurrentTutorial = {};
    this.currentIndex = -1;
  }

  // SHOW ARTICE TO EDIT
  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.ccccurrentTutorial = tutorial;
    this.currentIndex = index;
  }

}