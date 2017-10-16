import { Component, OnInit } from '@angular/core';
import { Globals } from '../../../app/config/global';

declare var $:any;
declare var Morris: any;
declare var moment: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private globals: Globals) {
     this.globals.title="Dashboard";
  }

  ngOnInit() {
}
  ngAfterViewInit() {}

}
