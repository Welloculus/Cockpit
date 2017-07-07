import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user: Object;

constructor(
   private authService:AuthService,
 private router:Router,
 private flashMessage: FlashMessagesService
) { }

ngOnInit() {
     this.user = JSON.parse(localStorage.getItem('user'));
     console.log(this.user);
}

}
