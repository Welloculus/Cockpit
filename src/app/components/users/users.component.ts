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
      "_id": "595b472a5ed862817f454001",
      "first_name": "Anees",
      "middle_name": "Lal",
      "last_name": "Deol",
      "email": "padama.radhakrishnan@pal.in",
      "primary_facility_id": "343",
      "dob": "1984-06-09",
      "gender": "M",
      "address": [
        {
          "line1": "16, Brock Villas",
          "line2": "Model Town",
          "city": "Ajmer",
          "state": "Rajasthan",
          "zip": "380332"
        }
      ],
      "contact_numbers": [
        {
          "primary": "06993579876",
          "secondary": "5396107605"
        }
      ],
      "emergency_contacts": [
        {
          "name": "",
          "address": "",
          "email": "",
          "primary_phone": "",
          "secondary_phone": ""
        }
      ],
      "devices": [
        {
          "id": "",
          "user_device_id": "",
          "device_name": "",
          "data_type": "",
          "communication_mode": "",
          "last_conected": "",
          "last_status": ""
        }
      ]
    },
    {
      "_id": "595b472a5ed862817f454002",
      "first_name": "Yogesh",
      "middle_name": "Venkat",
      "last_name": "Sidhu",
      "email": "harbhajan36@mangal.in",
      "primary_facility_id": "487",
      "dob": "1971-02-26",
      "gender": "M",
      "address": [
        {
          "line1": "49, Mansarovar",
          "line2": "",
          "city": "Dehradun",
          "state": "Uttarakhand",
          "zip": "389346"
        }
      ],
      "contact_numbers": [
        {
          "primary": "05649952128",
          "secondary": "3764740879"
        }
      ],
      "emergency_contacts": [
        {
          "name": "",
          "address": "",
          "email": "",
          "primary_phone": "",
          "secondary_phone": ""
        }
      ],
      "devices": [
        {
          "id": "",
          "user_device_id": "",
          "device_name": "",
          "data_type": "",
          "communication_mode": "",
          "last_conected": "",
          "last_status": ""
        }
      ]
    }
  ];

  }

}
