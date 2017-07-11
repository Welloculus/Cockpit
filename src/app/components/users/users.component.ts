import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:Object;

  constructor() { }

  ngOnInit() {
     this.users = [
          {
            "patient_dob": "603719087",
            "patient_gender": "M",
            "city": "Delhi",
            "email": "saurav.kumar@impetus.co.in",
            "patient_username": "saurav",
            "patient_lastname": "kumar",
            "patient_firstname": "sauravsingh",
            "contact": "9981925954"
          },
          {
           "city": "Noida",
           "contact": "9785412648",
           "patient_dob": "319635261",
           "patient_gender": "M",
           "email": "raghvendra@impetus.co.in",
           "patient_username": "testuser",
           "patient_lastname": "LName",
           "patient_firstname": "Fname"
         },
         {
          "patient_dob": "414329661",
          "patient_gender": "F",
           "city": "Indore",
           "email": "taruna@impetus.co.in",
           "patient_firstname": "taruna",
           "patient_lastname": "kshirsagar",
           "patient_username": "tarunakshirsagar",
           "contact": "9981947115"
         },
         {
          "patient_dob": "603718461",
          "patient_gender": "M",
           "city": "Indore",
           "email": "anuj@impetus.co.in",
           "patient_firstname": "Prachi",
           "patient_lastname": "Jain",
           "patient_username": "prachi",
           "contact": "9981947722"
         }
     ];
  }

}
