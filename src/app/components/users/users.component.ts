import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Globals } from '../../../app/config/global';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:Object;

  constructor(private authService:AuthService, private globals: Globals
) {
   this.globals.title="Users";
 }

  ngOnInit() {
       this.authService.getPatientList()
       .subscribe(data=>{
          this.users = data.responseContent;
       });
  }

}
