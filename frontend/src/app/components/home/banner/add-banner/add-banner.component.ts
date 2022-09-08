import { Component } from '@angular/core';
import { Banner } from 'src/app/_models/banner.model';
import { BannerService } from 'src/app/_services/banner.service';
import { ActivatedRoute, Router } from '@angular/router';  // ADDED BY ME


@Component({
  selector: 'app-add-banner',
  templateUrl: './add-banner.component.html',
  styleUrls: ['./add-banner.component.css']
})
export class AddBannerComponent {

  banner: Banner = {
    title: '',
    description: ''
  };
  submitted = false;

  constructor(
    private bannerService: BannerService,
    private route: ActivatedRoute,
    private router: Router) { }

  saveBanner(): void {
    const data = {
      title: this.banner.title,
      description: this.banner.description
    };

    this.bannerService.create(data)
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

  newBanner(): void {
    this.submitted = false;
    this.banner = {
      title: '',
      description: ''
    };
  }

}

