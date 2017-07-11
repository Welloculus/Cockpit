import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
declare var $:any;

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
      "_id": "595cf89d8a12bfaa7334b001",
      "device_id": "p1d1abcd",
      "device_name": "Bodytrak",
      "status": "1",
      "version": "1.2",
      "data_type": "Heart Rate",
      "communication_type": "Bluetooth",
      "description": "Heart rate monitor",
      "stock_availability": "25",
      "info_url": "http://www.bodytrak.co/",
      "supplier_id": "s1234",
      "supplier_name": "Bodytrak Supplier",
      "supplier_city": "New Delhi"
    },
    {
      "_id": "595cf89d8a12bfaa7334b002",
      "device_id": "p1d2gnmm",
      "device_name": "kolibree ara",
      "status": "0",
      "version": "1.5",
      "data_type": "Tooth Decay",
      "communication_type": "Bluetooth",
      "description": "Smart tooth brush",
      "stock_availability": "10",
      "info_url": "http://www.businesswire.com/news/home/20170103005546/en/Kolibree-Introduces-Ara-Toothbrush-Artificial-Intelligence/?feedref=JjAwJuNHiystnCoBq_hl-RLXHJgazfQJNuOVHefdHP-D8R-QU5o2AvY8bhI9uvWSD8DYIYv4TIC1g1u0AKcacnnViVjtb72bOP4-4nHK5ieT3WxPE8m_kWI77F87CseT",
      "supplier_id": "s3456",
      "supplier_name": "Kolibree Supplier",
      "supplier_city": "Mumbai"
    },
    {
      "_id": "595cf89d8a12bfaa7334b003",
      "device_id": "p1d3nkkn",
      "device_name": "QardioCore",
      "status": "1",
      "version": "5.0",
      "data_type": "ECG",
      "communication_type": "Bluetooth",
      "description": "ECG EKG Monitor",
      "stock_availability": "50",
      "info_url": "https://www.getqardio.com/qardiocore-wearable-ecg-ekg-monitor-iphone/",
      "supplier_id": "s9876",
      "supplier_name": "Qardio Core Supplier",
      "supplier_city": "Hyderabad"
    },
    {
      "_id": "595cf89d8a12bfaa7334b004",
      "device_id": "p1d4hdcd",
      "device_name": "Withings Blood Pressure monitor",
      "status": "1",
      "version": "7.2",
      "data_type": "Blood Pressure",
      "communication_type": "Bluetooth",
      "description": "Blood Pressure monitor",
      "stock_availability": "8",
      "info_url": "https://www.withings.com/eu/en/products/blood-pressure-monitor",
      "supplier_id": "s7348",
      "supplier_name": "Withings Supplier",
      "supplier_city": "Bengaluru"
    },
    {
      "_id": "595cf89d8a12bfaa7334b005",
      "device_id": "p1d5mmrj",
      "device_name": "Fitbit Aria",
      "status": "0",
      "version": "3.7",
      "data_type": "Heart Rate",
      "communication_type": "WiFi",
      "description": "Heart rate monitor",
      "stock_availability": "5",
      "info_url": "https://www.fitbit.com/eu/aria",
      "supplier_id": "s8484",
      "supplier_name": "Fitbit Supplier",
      "supplier_city": "New Delhi"
    },
    {
      "_id": "595cf89d8a12bfaa7334b006",
      "device_id": "p1d6jsks",
      "device_name": "Viatomtech Checkme",
      "status": "0",
      "version": "2.0",
      "data_type": "Heart Rate",
      "communication_type": "Bluetooth",
      "description": "Heart rate monitor",
      "stock_availability": "32",
      "info_url": "http://www.viatomtech.com/checkme-pro",
      "supplier_id": "s8723",
      "supplier_name": "Viatomtech Supplier",
      "supplier_city": "Indore"
    },
    {
      "_id": "595cf89d8a12bfaa7334b007",
      "device_id": "p1d7hjsa",
      "device_name": "Zephyr heartrate sensor",
      "status": "1",
      "version": "4.3",
      "data_type": "Heart Rate",
      "communication_type": "Bluetooth",
      "description": "Heart rate monitor",
      "stock_availability": "25",
      "info_url": "https://www.zephyranywhere.com/resources/hxm",
      "supplier_id": "s0283",
      "supplier_name": "Zephyr Supplier",
      "supplier_city": "Bengaluru"
    },
    {
      "_id": "595cf89d8a12bfaa7334b008",
      "device_id": "p1d8ksls",
      "device_name": "Polar H7 Heart Rate Sensor",
      "status": "1",
      "version": "5.7",
      "data_type": "Heart Rate",
      "communication_type": "Bluetooth",
      "description": "Polar H7 Bluetooth Heart Rate Sensor & Fitness Tracker",
      "stock_availability": "15",
      "info_url": "http://www.bodytrak.co/",
      "supplier_id": "s7297",
      "supplier_name": "Polar Supplier",
      "supplier_city": "New Delhi"
    },
    {
      "_id": "595cf89d8a12bfaa7334b009",
      "device_id": "p1d9sdnk",
      "device_name": "Jarv Heart Rate Monitor",
      "status": "0",
      "version": "1.2",
      "data_type": "Heart Rate",
      "communication_type": "Bluetooth",
      "description": "Jarv Bluetooth Wireless Heart Rate Monitor and Sensor",
      "stock_availability": "20",
      "info_url": "http://www.jarvmobile.com/productdetail.asp?productid=32262",
      "supplier_id": "s6128",
      "supplier_name": "Jarv Supplier",
      "supplier_city": "Mumbai"
    },
    {
      "_id": "595cf89d8a12bfaa7334b010",
      "device_id": "p1d10hais",
      "device_name": "Garmin Heart Rate Monitor",
      "status": "1",
      "version": "0.2",
      "data_type": "Heart Rate",
      "communication_type": "Bluetooth",
      "description": "Garmin vívofit 2 Bundle with Heart Rate Monitor",
      "stock_availability": "35",
      "info_url": "http://www.garmin.com.sg/products/intosports/vivofit2_black/",
      "supplier_id": "s8723",
      "supplier_name": "Garmin Supplier",
      "supplier_city": "New Delhi"
    }
];
/*     this.device = this.authService.deviceList(); */
     console.log(this.devices[0].device_name);

  }

  ngAfterViewInit(){

  /* BOOTSNIPP FULLSCREEN FIX */
  $('#fullscreen').on('click', function(event) {
      event.preventDefault();
  });

/*  $('tbody > tr').on('click', function(event) {
      event.preventDefault();
      $('#myModal').modal('show');
  })
*/
  $('.btn-mais-info').on('click', function(event) {
      $( '.open_info' ).toggleClass( "hide" );
  })


  }

  deviceModel: Object={
       "_id": "",
       "device_id": "",
       "device_name": "",
       "status": "",
       "version": "",
       "data_type": "",
       "communication_type": "",
       "description": "",
       "stock_availability": "",
       "info_url": "",
       "supplier_id": "",
       "supplier_name": "",
       "supplier_city": ""
  };

  openDeviceModel(i){

     console.log(i);

     if(this.devices[i]){
          this.deviceModel = this.devices[i];
          console.log(this.deviceModel);
          event.preventDefault();
          $('#myModal').modal('show');
     }
  }

}
