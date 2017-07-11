import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var Morris: any;
declare var moment: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
}
  ngAfterViewInit() {
  let line = new Morris.Line({
    element: 'line-chart',
    resize: true,
    data: [
     {y: '2015 Q1', item1: 2666},
     {y: '2015 Q2', item1: 2778},
     {y: '2015 Q3', item1: 4912},
     {y: '2015 Q4', item1: 3767},
     {y: '2016 Q1', item1: 6810},
     {y: '2016 Q2', item1: 5670},
     {y: '2016 Q3', item1: 4820},
     {y: '2016 Q4', item1: 15073},
     {y: '2017 Q1', item1: 10687},
     {y: '2017 Q2', item1: 8432}
    ],
    xkey: 'y',
    ykeys: ['item1'],
    labels: ['Total Devices'],
    lineColors: ['#efefef'],
    lineWidth: 2,
    hideHover: 'auto',
    gridTextColor: "#fff",
    gridStrokeWidth: 0.4,
    pointSize: 4,
    pointStrokeColors: ["#efefef"],
    gridLineColor: "#efefef",
    gridTextFamily: "Open Sans",
    gridTextSize: 10
  });

  $(".knob").knob();

// todo list
//Make the dashboard widgets sortable Using jquery UI
$(".connectedSortable").sortable({
  placeholder: "sort-highlight",
  connectWith: ".connectedSortable",
  handle: ".box-header, .nav-tabs",
  forcePlaceholderSize: true,
  zIndex: 999999
});
$(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor", "move");

//jQuery UI sortable for the todo list
$(".todo-list").sortable({
  placeholder: "sort-highlight",
  handle: ".handle",
  forcePlaceholderSize: true,
  zIndex: 999999
});

//bootstrap WYSIHTML5 - text editor
$(".textarea").wysihtml5();

$('.daterange').daterangepicker({
  ranges: {
   'Today': [moment(), moment()],
   'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
   'Last 7 Days': [moment().subtract(6, 'days'), moment()],
   'Last 30 Days': [moment().subtract(29, 'days'), moment()],
   'This Month': [moment().startOf('month'), moment().endOf('month')],
   'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  },
  startDate: moment().subtract(29, 'days'),
  endDate: moment()
}, function (start, end) {
  window.alert("You chose: " + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
});

//The Calender
$("#calendar").datepicker();

//SLIMSCROLL FOR CHAT WIDGET
$('#chat-box').slimScroll({
height: '250px'
});



  /* The todo list plugin */
  $(".todo-list").todolist({
    onCheck: function (ele) {
      window.console.log("The element has been checked");
      return ele;
    },
    onUncheck: function (ele) {
      window.console.log("The element has been unchecked");
      return ele;
    }
  });

  //Fix for charts under tabs
  $('.box ul.nav a').on('shown.bs.tab', function () {
    line.redraw();
  });

  }

}
