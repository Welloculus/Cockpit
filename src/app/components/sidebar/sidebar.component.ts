import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
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

     onLogoutClick(){
         this.authService.logout();
         this.flashMessage.show("You are logged out",{
             cssClass: "alert alert-success",
             timeout:3000
         });
         this.router.navigate(['/login']);
         return false;
     }
}
