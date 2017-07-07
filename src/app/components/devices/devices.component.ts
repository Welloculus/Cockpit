import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  devices:Object;

  constructor(
     private authService:AuthService,
   private router:Router,
   private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
       this.devices = [{
         "success": true,
         "responseContent": [
           {
             "contact": "9826012461",
             "patient_gender": "M",
             "device_udi": "28-051691b6b4ff",
             "is_available": true,
             "device_name": "Temperature_Sensor",
             "supplier_username": "saurav",
             "supplier_email": "saurav.kumar@impetus.co.in",
             "supplier_city": "India",
             "supplier_contact":"8447541999",
             "device_state": true,
             "device_type": "IOT",
           }
         ],
         "responseCode": 1000,
         "status": 200,
         "errorCode": null,
         "errorMessage": null
       },
       {
         "success": true,
         "responseContent": [
           {
             "contact": "9826012461",
             "patient_gender": "M",
             "device_udi": "HDXMIA",
             "is_available": true,
             "device_name": "Zephyr",
             "supplier_username": "Vinit",
             "supplier_email": "vinit@impetus.co.in",
             "supplier_city": "India",
             "supplier_contact":"8447458999",
             "device_state": false,
             "device_type": "IOT",
           }
         ],
         "responseCode": 1000,
         "status": 200,
         "errorCode": null,
         "errorMessage": null
       },
       {
         "success": true,
         "responseContent": [
           {
             "contact": "9826012461",
             "patient_gender": "M",
             "device_udi": "29-232ASX",
             "is_available": true,
             "device_name": "BP",
             "supplier_username": "tarun",
             "supplier_email": "taruna@impetus.co.in",
             "supplier_city": "India",
             "supplier_contact":"8478441999",
             "device_state": true,
             "device_type": "IOT",
           }
         ],
         "responseCode": 1000,
         "status": 200,
         "errorCode": null,
         "errorMessage": null
       },
       {
         "success": true,
         "responseContent": [
           {
             "contact": "9826012461",
             "patient_gender": "M",
             "device_udi": "HDXMIA",
             "is_available": true,
             "device_name": "Zephyr",
             "supplier_username": "Vinit",
             "supplier_email": "vinit@impetus.co.in",
             "supplier_city": "India",
             "supplier_contact":"8447458999",
             "device_state": false,
             "device_type": "IOT",
           }
         ],
         "responseCode": 1000,
         "status": 200,
         "errorCode": null,
         "errorMessage": null
       },
       {
         "success": true,
         "responseContent": [
           {
             "contact": "9826012461",
             "patient_gender": "M",
             "device_udi": "29-232ASX",
             "is_available": true,
             "device_name": "BP",
             "supplier_username": "tarun",
             "supplier_email": "taruna@impetus.co.in",
             "supplier_city": "India",
             "supplier_contact":"8478441999",
             "device_state": true,
             "device_type": "IOT",
           }
         ],
         "responseCode": 1000,
         "status": 200,
         "errorCode": null,
         "errorMessage": null
       },{
         "success": true,
         "responseContent": [
           {
             "contact": "9826012461",
             "patient_gender": "M",
             "device_udi": "HDXMIA",
             "is_available": true,
             "device_name": "Zephyr",
             "supplier_username": "Vinit",
             "supplier_email": "vinit@impetus.co.in",
             "supplier_city": "India",
             "supplier_contact":"8447458999",
             "device_state": false,
             "device_type": "IOT",
           }
         ],
         "responseCode": 1000,
         "status": 200,
         "errorCode": null,
         "errorMessage": null
       },
       {
         "success": true,
         "responseContent": [
           {
             "contact": "9826012461",
             "patient_gender": "M",
             "device_udi": "29-232ASX",
             "is_available": true,
             "device_name": "BP",
             "supplier_username": "tarun",
             "supplier_email": "taruna@impetus.co.in",
             "supplier_city": "India",
             "supplier_contact":"8478441999",
             "device_state": true,
             "device_type": "IOT",
           }
         ],
         "responseCode": 1000,
         "status": 200,
         "errorCode": null,
         "errorMessage": null
       },{
         "success": true,
         "responseContent": [
           {
             "contact": "9826012461",
             "patient_gender": "M",
             "device_udi": "28-051691b6b4ff",
             "is_available": true,
             "device_name": "Temperature_Sensor",
             "supplier_username": "saurav",
             "supplier_email": "saurav.kumar@impetus.co.in",
             "supplier_city": "India",
             "supplier_contact":"8447541999",
             "device_state": true,
             "device_type": "IOT",
           }
         ],
         "responseCode": 1000,
         "status": 200,
         "errorCode": null,
         "errorMessage": null
       },
       {
         "success": true,
         "responseContent": [
           {
             "contact": "9826012461",
             "patient_gender": "M",
             "device_udi": "HDXMIA",
             "is_available": true,
             "device_name": "Zephyr",
             "supplier_username": "Vinit",
             "supplier_email": "vinit@impetus.co.in",
             "supplier_city": "India",
             "supplier_contact":"8447458999",
             "device_state": false,
             "device_type": "IOT",
           }
         ],
         "responseCode": 1000,
         "status": 200,
         "errorCode": null,
         "errorMessage": null
       }];
/*     this.device = this.authService.deviceList(); */
     console.log(this.devices[0].responseContent[0].device_name);

  }

}
