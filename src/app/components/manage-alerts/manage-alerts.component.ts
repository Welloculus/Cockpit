import { Component, OnInit } from '@angular/core';
import { Globals } from '../../../app/config/global';

@Component({
  selector: 'app-manage-alerts',
  templateUrl: './manage-alerts.component.html',
  styleUrls: ['./manage-alerts.component.css']
})
export class ManageAlertsComponent implements OnInit {

  constructor(private globals: Globals) {
     this.globals.title="Manage Alerts";
  }

  ngOnInit() {
  }

}
