import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Globals } from '../../../app/config/global';

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
   private flashMessage: FlashMessagesService,
   private globals: Globals
  ) {
     this.globals.title="Devices";
   }

  ngOnInit() {
       this.authService.getDeviceList()
       .subscribe(data=>{
          this.devices = data.responseContent;
       });
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
