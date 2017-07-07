import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(
     private authService:AuthService,
   private router:Router,
   private flashMessage: FlashMessagesService
  ) { }

     ngAfterViewInit() {
          $.widget.bridge('uibutton', $.ui.button);
     }
}
