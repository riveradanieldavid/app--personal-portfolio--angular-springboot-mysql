import { Component, OnInit } from '@angular/core';
// MYRESUME
import { DarkModeService } from '../../../_services/dark-mode.service';
// MYRESUME /

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
// MYRESUME
export class AboutComponent implements OnInit {

  constructor(private darkModeService: DarkModeService) { }
  ngOnInit(): void {
  }
  get darkMode() {
    return this.darkModeService.darkMode;
  }
}
// MYRESUME /


