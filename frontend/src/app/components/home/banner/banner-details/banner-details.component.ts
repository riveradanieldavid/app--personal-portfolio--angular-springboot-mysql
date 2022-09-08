import { Component, Input, OnInit } from '@angular/core';
import { BannerService } from 'src/app/_services/banner.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Banner } from 'src/app/_models/banner.model';

@Component({
  selector: 'app-banner-details',
  templateUrl: './banner-details.component.html',
  styleUrls: ['./banner-details.component.css']
})
export class BannerDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentBanner: Banner = {
    title: '',
    description: ''
  };

  message = '';

  constructor(
    private bannerService: BannerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getBanner(this.route.snapshot.params["id"]);
    }
  }

  getBanner(id: string): void {
    this.bannerService.get(id)
      .subscribe({
        next: (data) => {
          this.currentBanner = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateBanner(): void {
    this.message = '';

    this.bannerService.update(this.currentBanner.id, this.currentBanner)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This banner was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteBanner(): void {
    this.bannerService.delete(this.currentBanner.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/banners']);
        },
        error: (e) => console.error(e)
      });
  }

}