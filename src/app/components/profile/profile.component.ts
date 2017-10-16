import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Globals } from '../../../app/config/global';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

     user: Object;

     constructor(
          private authService:AuthService,
          private router:Router,
          private flashMessage: FlashMessagesService,
          private globals: Globals
       ) {
            this.globals.title="Profile";
          }

     ngOnInit() {
          this.user = JSON.parse(localStorage.getItem('user'));
          console.log("profile->",this.user);
     }

}
