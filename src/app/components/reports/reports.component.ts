import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // Pie
  public pieChartLabels:string[] = ['Critical Low', 'Slightly Low', 'Normal', 'Slightly High', 'Critical High'];
  public pieChartData:number[] = [10, 45, 50, 20, 17];
  public pieChartType:string = 'pie';
  public pieChartColors:  {}[]          = [ { backgroundColor: ['#b9cff0', '#dfb9f1', '#e0e0e0','#f7b391','#ff6060'] } ];

  // lineChart
  public lineChartData:Array<any> = [
       {data: [100, 160, 120, 170, 180], label: 'Max Pulse Rate'},
       {data: [40, 70, 60, 90, 120], label: 'Min Pulse Rate'}
  ];
  public lineChartLabels:Array<any> = ['Critically low', 'Slightly low', 'Normal', 'Slightly High', 'Critically High'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  public lineRandomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // bar chart
  public barChartOptions:any = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    public barChartLabels:string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;

    public barChartData:any[] = [
      {data: [30, 33, 40, 45, 49, 32, 35], label: 'Max Temperature'},
      {data: [25, 28, 35, 35, 45, 29, 26], label: 'Min Temperature'}
    ];

    // events
    public chartClicked(e:any):void {
      console.log(e);
    }

    public chartHovered(e:any):void {
      console.log(e);
    }

    public randomize():void {
      // Only Change 3 values
      let data = [
        Math.round(Math.random() * 100),
        59,
        80,
        (Math.random() * 100),
        56,
        (Math.random() * 100),
        40];
      let clone = JSON.parse(JSON.stringify(this.barChartData));
      clone[0].data = data;
      this.barChartData = clone;
      /**
       * (My guess), for Angular to recognize the change in the dataset
       * it has to change the dataset variable directly,
       * so one way around it, is to clone the data, change it and then
       * assign it;
       */
    }

}
