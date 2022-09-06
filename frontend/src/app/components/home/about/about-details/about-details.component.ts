import { Component, Input, OnInit } from '@angular/core';
import { AboutService } from 'src/app/_services/about.service';
import { ActivatedRoute, Router } from '@angular/router';
import { About } from 'src/app/_models/about.model';

@Component({
  selector: 'app-about-details',
  templateUrl: './about-details.component.html',
  styleUrls: ['./about-details.component.css']
})
export class AboutDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentAbout: About = {
    title: '',
    description: ''
  };

  message = '';

  constructor(
    private aboutService: AboutService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getAbout(this.route.snapshot.params["id"]);
    }
  }

  getAbout(id: string): void {
    this.aboutService.get(id)
      .subscribe({
        next: (data) => {
          this.currentAbout = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateAbout(): void {
    this.message = '';

    this.aboutService.update(this.currentAbout.id, this.currentAbout)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This about was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteAbout(): void {
    this.aboutService.delete(this.currentAbout.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/about']);
        },
        error: (e) => console.error(e)
      });
  }

}