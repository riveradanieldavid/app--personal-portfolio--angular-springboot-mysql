import { Component, OnInit } from '@angular/core';
// MYRESUME
import { DarkModeService } from 'src/app/_services/dark-mode.service';
// MYRESUME /

@Component({
  selector: 'app-about-image',
  templateUrl: './about-image.component.html',
  styleUrls: ['./about-image.component.scss']
})
export class AboutImageComponent implements OnInit {

  constructor(private darkModeService: DarkModeService) { }

  ngOnInit(): void {
  }
  get darkMode() {
    return this.darkModeService.darkMode;
  }

}
