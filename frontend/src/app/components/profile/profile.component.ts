import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;

  constructor(private token: TokenStorageService) { }

  // "ngOnInit()" MAKES AVAILABLE CONTENT TO SHOW IT IN THE HTML FILE
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }
}
