import { Component, OnInit } from '@angular/core';
import { Globals } from '../../../app/config/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private globals: Globals) {
  this.globals.title="Home";
  }

  ngOnInit() {
  }

}
