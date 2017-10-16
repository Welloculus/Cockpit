import { Component, OnInit } from '@angular/core';
import { Globals } from '../../../app/config/global';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {

  constructor(
     private globals: Globals
  ) {
       this.globals.title="Facilities";
     }


  ngOnInit() {
  }

}
