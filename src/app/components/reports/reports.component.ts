import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Globals } from '../../../app/config/global';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import * as CryptoJS from "crypto-js"
import AES from 'crypto-js/aes';
import SHA1 from 'crypto-js/sha1';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  heart_rate:Object;
  public start_date:string;
  public end_date:string;
  public encrypted_data:string;
  public provider_id:any;

  public iframe1_url:SafeResourceUrl;
  public title1:string="Device Type With Total Users";

  public iframe2_url:SafeResourceUrl;
  public title2:string="Device Type With Total Devices";

  public iframe3_url:SafeResourceUrl;
  public title3:string="Age Range With Device Type & Total Users";

  public iframe4_url:SafeResourceUrl;
  public title4:string="Age Range With Total Device"

  public iframe5_url:SafeResourceUrl;
  public title5:string="Gender With Total Device"

  public iframe6_url:SafeResourceUrl;
  public title6:string="Gender With Total Users"

  public iframe7_url:SafeResourceUrl;
  public title7:string="Month Reports With Total Active Users"

  public iframe8_url:SafeResourceUrl;
  public title8:string="Pulse Report"

  constructor(private authService:AuthService, private globals: Globals, private sanitizer: DomSanitizer
) {
   this.globals.title="Reports";
 }

  ngOnInit() {
     this.start_date="2017-07-01";
     this.end_date=this.getEndDate();
     console.log("userdata list:");
     console.log(this.authService.userdata);
     this.provider_id = this.authService.userdata.id;
     console.log("provider_id",this.provider_id);
     this.getPieChartRecords();

     var url1 ="http://192.168.146.54:5601/app/kibana#/visualize/edit/edb6a710-9f75-11e7-97d0-29020f5a4e5c?embed=true&_g=()&_a=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:healthrecords,key:provider_id,negate:!f,type:phrase,value:'"+this.provider_id+"'),query:(match:(provider_id:(query:'"+this.provider_id+"',type:phrase))))),linked:!f,query:(match_all:()),uiState:(vis:(legendOpen:!f)),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Total+Users',field:user_id),schema:metric,type:cardinality),(enabled:!t,id:'2',params:(customLabel:Type,field:datatype,order:desc,orderBy:'1',size:5),schema:segment,type:terms)),listeners:(),params:(addLegend:!t,addTooltip:!t,isDonut:!f,legendPosition:right),title:'Provider:+Datatype+with+total+users',type:pie))";

     var url2 ="http://192.168.146.54:5601/app/kibana#/visualize/edit/4efd69b0-9f75-11e7-97d0-29020f5a4e5c?embed=true&_g=()&_a=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:healthrecords,key:provider_id,negate:!f,type:phrase,value:'"+this.provider_id+"'),query:(match:(provider_id:(query:'"+this.provider_id+"',type:phrase))))),linked:!f,query:(match_all:()),uiState:(vis:(legendOpen:!f)),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Total+Devices',field:device_id.keyword,json:''),schema:metric,type:cardinality),(enabled:!t,id:'2',params:(customLabel:Type,field:datatype,order:desc,orderBy:'1',size:5),schema:segment,type:terms)),listeners:(),params:(addLegend:!t,addTooltip:!t,isDonut:!f,legendPosition:right),title:'Provider:+Datatype+with+total+device',type:pie))";

     var url3 ="http://192.168.146.54:5601/app/kibana#/visualize/edit/24cf0190-a1b8-11e7-97d0-29020f5a4e5c?embed=true&_g=()&_a=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:healthrecords,key:provider_id,negate:!f,type:phrase,value:'"+this.provider_id+"'),query:(match:(provider_id:(query:'"+this.provider_id+"',type:phrase))))),linked:!f,query:(match_all:()),uiState:(vis:(legendOpen:!f)),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Total+Users',field:user_id),schema:metric,type:cardinality),(enabled:!t,id:'2',params:(customLabel:'Age+Range',field:age,ranges:!((from:0,to:20),(from:21,to:40),(from:41,to:60),(from:61,to:80),(from:81,to:100))),schema:segment,type:range),(enabled:!t,id:'3',params:(customLabel:'Data+Type',field:datatype,order:desc,orderBy:'1',size:5),schema:group,type:terms)),listeners:(),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(text:'Age+Range'),type:category)),grid:(categoryLines:!f,style:(color:%23eee)),legendPosition:right,seriesParams:!((data:(id:'1',label:'Total+Users'),drawLinesBetweenPoints:!t,interpolate:step-after,mode:normal,show:true,showCircles:!t,type:histogram,valueAxis:ValueAxis-1)),times:!(),valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:'Total+Users'),type:value),(id:ValueAxis-2,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:RightAxis-1,position:right,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:''),type:value))),title:'Provider:+Age+with+datatype',type:histogram))";

     var url4 ="http://192.168.146.54:5601/app/kibana#/visualize/edit/099d07f0-a1b8-11e7-97d0-29020f5a4e5c?embed=true&_g=()&_a=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!t,index:healthrecords,key:query,negate:!f,type:query_string,value:'device_*'),query:(query_string:(analyze_wildcard:!t,query:'device_*'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:healthrecords,key:provider_id,negate:!f,type:phrase,value:'"+this.provider_id+"'),query:(match:(provider_id:(query:'"+this.provider_id+"',type:phrase))))),linked:!f,query:(match_all:()),uiState:(vis:(legendOpen:!f)),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Total+Devices',field:device_id.keyword),schema:metric,type:cardinality),(enabled:!t,id:'2',params:(customLabel:'Age+Range',field:age,ranges:!((from:0,to:20),(from:21,to:40),(from:41,to:60),(from:61,to:80),(from:81,to:100))),schema:segment,type:range)),listeners:(),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(text:'Age+Range'),type:category)),grid:(categoryLines:!f,style:(color:%23eee)),legendPosition:right,seriesParams:!((data:(id:'1',label:'Total+Devices'),drawLinesBetweenPoints:!t,mode:stacked,show:true,showCircles:!t,type:histogram,valueAxis:ValueAxis-1)),times:!(),valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:'Total+Devices'),type:value))),title:'Provider:+Age+wise+data',type:histogram))";

     var url5 ="http://192.168.146.54:5601/app/kibana#/visualize/edit/d294c5c0-a1b4-11e7-97d0-29020f5a4e5c?embed=true&_g=()&_a=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:healthrecords,key:provider_id,negate:!f,type:phrase,value:'"+this.provider_id+"'),query:(match:(provider_id:(query:'"+this.provider_id+"',type:phrase))))),linked:!f,query:(match_all:()),uiState:(vis:(legendOpen:!f)),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Total+Devices',field:device_id.keyword),schema:metric,type:cardinality),(enabled:!t,id:'2',params:(customLabel:Gender,exclude:male,field:gender,order:desc,orderBy:'1',size:2),schema:segment,type:terms)),listeners:(),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(text:Gender),type:category)),grid:(categoryLines:!f,style:(color:%23eee),valueAxis:!n),legendPosition:right,orderBucketsBySum:!f,seriesParams:!((data:(id:'1',label:'Total+Devices'),drawLinesBetweenPoints:!t,mode:normal,show:true,showCircles:!t,type:histogram,valueAxis:ValueAxis-1)),times:!(),valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:'Total+Devices'),type:value))),title:'Provider:+Gender+with+total+devices',type:histogram))";

     var url6 ="http://192.168.146.54:5601/app/kibana#/visualize/edit/8115c900-a1c4-11e7-97d0-29020f5a4e5c?embed=true&_g=()&_a=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:healthrecords,key:provider_id,negate:!f,type:phrase,value:'"+this.provider_id+"'),query:(match:(provider_id:(query:'"+this.provider_id+"',type:phrase))))),linked:!f,query:(match_all:()),uiState:(vis:(legendOpen:!f)),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Total+Users',field:user_id),schema:metric,type:cardinality),(enabled:!t,id:'2',params:(customLabel:Gender,field:gender,order:desc,orderBy:'1',size:2),schema:segment,type:terms)),listeners:(),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(text:Gender),type:category)),grid:(categoryLines:!f,style:(color:%23eee),valueAxis:!n),legendPosition:right,orderBucketsBySum:!f,seriesParams:!((data:(id:'1',label:'Total+Users'),drawLinesBetweenPoints:!t,mode:normal,show:true,showCircles:!t,type:histogram,valueAxis:ValueAxis-1)),times:!(),valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:'Total+Users'),type:value))),title:'Provider:+Gender+with+total+users',type:histogram))";

     var url7 ="http://192.168.146.54:5601/app/kibana#/visualize/edit/5bedc510-a1d3-11e7-97d0-29020f5a4e5c?embed=true&_g=()&_a=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:healthrecords,key:provider_id,negate:!f,type:phrase,value:'"+this.provider_id+"'),query:(match:(provider_id:(query:'"+this.provider_id+"',type:phrase))))),linked:!f,query:(match_all:()),uiState:(vis:(defaultColors:('0%25+-+25%25':'rgb(247,251,255)','25%25+-+50%25':'rgb(198,219,239)','50%25+-+75%25':'rgb(107,174,214)','75%25+-+100%25':'rgb(33,113,181)'),legendOpen:!f)),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Active+Users',field:user_id),schema:metric,type:cardinality),(enabled:!t,id:'2',params:(customLabel:Date,field:time,ranges:!((from:now-1M,to:now),(from:now-2M,to:now-1M),(from:now-3M,to:now-2M),(from:now-4M,to:now-3M),(from:now-5M,to:now-4M),(from:now-6M,to:now-5M))),schema:segment,type:date_range)),listeners:(),params:(addLegend:!t,addTooltip:!t,colorSchema:Blues,colorsNumber:4,colorsRange:!(),enableHover:!f,invertColors:!f,legendPosition:right,percentageMode:!t,setColorRange:!f,times:!(),valueAxes:!((id:ValueAxis-1,labels:(color:%23000,rotate:0,show:!t),scale:(defaultYExtents:!f,type:linear),show:!f,type:value))),title:'Provider:+Month+Reports+(total+users)',type:heatmap))";

     var url8 ="http://192.168.146.54:5601/app/kibana#/visualize/edit/2b11dd30-a1d0-11e7-97d0-29020f5a4e5c?embed=true&_g=()&_a=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:healthrecords,key:provider_id,negate:!f,type:phrase,value:'"+this.provider_id+"'),query:(match:(provider_id:(query:'"+this.provider_id+"',type:phrase))))),linked:!f,query:(match_all:()),uiState:(vis:(legendOpen:!f)),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Total+Users',field:user_id),schema:metric,type:cardinality),(enabled:!t,id:'2',params:(field:pulse,ranges:!((from:0,to:20),(from:21,to:40),(from:41,to:60),(from:61,to:80),(from:81,to:90),(from:91,to:100),(from:121,to:140),(from:141,to:160),(from:161,to:180),(from:181,to:200),(from:201,to:220),(from:220,to:240))),schema:segment,type:range)),listeners:(),params:(addLegend:!t,addTooltip:!t,isDonut:!t,legendPosition:right),title:'Provider:+Pulse+Pie+chart',type:pie))";

     this.iframe1_url=this.sanitizer.bypassSecurityTrustResourceUrl(url1);
     this.iframe2_url=this.sanitizer.bypassSecurityTrustResourceUrl(url2);
     this.iframe3_url=this.sanitizer.bypassSecurityTrustResourceUrl(url3);
     this.iframe4_url=this.sanitizer.bypassSecurityTrustResourceUrl(url4);
     this.iframe5_url=this.sanitizer.bypassSecurityTrustResourceUrl(url5);
     this.iframe6_url=this.sanitizer.bypassSecurityTrustResourceUrl(url6);
     this.iframe7_url=this.sanitizer.bypassSecurityTrustResourceUrl(url7);
     this.iframe8_url=this.sanitizer.bypassSecurityTrustResourceUrl(url8);

     console.log("iframe1_url",this.iframe1_url);
     console.log("iframe2_url",this.iframe2_url);
     console.log("iframe3_url",this.iframe3_url);
     console.log("iframe4_url",this.iframe4_url);

  }

  ngAfterViewInit(){


  }

 dcData(ciphertext, passPhrase, salt, iv){
     var cipherParams = CryptoJS.lib.CipherParams.create({
     ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
     });

     console.log("cipherParams",cipherParams);

     var ckey = CryptoJS.PBKDF2(
     passPhrase,
     CryptoJS.enc.Hex.parse(salt),
     { keySize: (256+128)/32, iterations: 1000 });
     console.log("ckey-->",ckey);
/*
     var decrypted = CryptoJS.AES.decrypt(
     cipherParams,
     ckey,
     { iv: iv });
     console.log("decrypted--->",decrypted);
     console.log("decrypted string--->",decrypted.toString(CryptoJS.enc.Utf8));
*/
  }


  decryptData(data){


  var base64Key = "wellie";
  console.log( "base64Key = " + base64Key );

  // this is the actual key as a sequence of bytes
  var key = CryptoJS.enc.Base64.parse(base64Key);

  console.log( "key = " + key );

    console.log("decryptData", data);

    var myString   = "https://www.titanesmedellin.com/";
    var myPassword = "wellie";


    // PROCESS
    var gen_key = CryptoJS.SHA1(myPassword).toString();
    var encrypted = CryptoJS.AES.encrypt(myString, gen_key);
    var decrypted = CryptoJS.AES.decrypt(encrypted, gen_key);
    var plaintext = decrypted.toString(CryptoJS.enc.Utf8);
    console.log("encrypted",encrypted);
    console.log("decrypted",plaintext);

    var salt = CryptoJS.lib.WordArray.random(128/8);
    var key = CryptoJS.PBKDF2(myPassword, salt, { keySize: 128/32, iterations: 100 });
    var iv = CryptoJS.lib.WordArray.random(128/8);
    var ivv = CryptoJS.enc.Hex.parse('00000000000000000000000000000000');
    key="[B@f4832da";
    var passPhrase="wellie";
    var keySize = 128/8;
    key = CryptoJS.enc.Utf8.parse(key);
    console.log("key",key);
    console.log("iv",iv);
    console.log("ivv",ivv);


//    this.decrypt();
  if(data.success==true && 1==1){
     var encrypt_data = data.responseContent.heart_rate;
     console.log("encrypt_data",encrypt_data);
     for(var i=0; i<=encrypt_data.length; i++){

     //this.dcData(encrypt_data[i], passPhrase, salt, iv);

            // this is the decrypted data as a sequence of bytes
             var encryptedStr=CryptoJS.enc.Base64.parse(encrypt_data[i]);

             var cryptkey = CryptoJS.enc.Utf8.parse('wellie');
             console.log("key",cryptkey);
             console.log("encryptedStr",encryptedStr);
var rawData = atob(encryptedStr);
console.log("rawData", rawData);
             var decrypt = CryptoJS.AES.decrypt({ciphertext: encryptedStr}, cryptkey, {
                 iv: iv,
                 mode: CryptoJS.mode.CBC,
                 padding: CryptoJS.pad.Pkcs7
             });

             console.log(decrypt.toString(CryptoJS.enc.Utf8));

            //var decrypted = CryptoJS.AES.decrypt({ciphertext: encryptedStr}, key, { iv: iv, mode:CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });

            //var decrypted = this.decryptByDES(encryptedStr,myPassword);

            // this is the decrypted data as a string
            //console.log(i+"->",encrypt_data[i]);
            //var decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
            //console.log('decrypted text : '+ decryptedText);
            //console.log( "decryptedData = " + decrypted);
     }
  }

  }

  decryptByDES(ciphertext, key) {
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    // direct decrypt ciphertext
    var decrypted = CryptoJS.DES.decrypt({
        ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
    }, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}
  decrypt(){
      var salt = CryptoJS.enc.Hex.parse("3A79D3242F9D0DCE0C811DCCE7F830C5");
      var iv = CryptoJS.enc.Hex.parse("9BCBD77036744C7F26DF591AE6A772C6");
      var encryptedBase64 =   "eKCnyuKiH3lvknsNZq9hARCr6xtDLU/De7sPc3RPSRFAh7WCurBKmDZx/Ol0mbROBtAJBCT0+U927iygd4GspQ==";
      var key = CryptoJS.PBKDF2("passwordA", salt, { keySize: 128/32, iterations: 100 });
      console.log('key '+key);
      var encryptedStr = encryptedBase64; //CryptoJS.enc.Base64.parse(encryptedBase64);
      console.log('encryptedStr  : '+ encryptedStr );
      var decrypted = CryptoJS.AES.decrypt(encryptedStr, key, { iv: iv, mode:        CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
      console.log('decrypted : '+ decrypted);
      var decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
      console.log('decrypted text : '+ decryptedText);
  }
  public pieChartData:number[];
  public pieChartLabels:string[];
  public pieChartType:string;
  public pieChartColors:  {}[];

  getEndDate(){
       var date = new Date();
       var month = "0"+(date.getMonth()+1);
       var day = "0"+(date.getDate());
       if(month.length!=2){
            month = ""+(date.getMonth()+1);
       }
       if(day.length!=2){
            day = ""+(date.getDate());
       }

       return  date.getFullYear()+"-"+month+"-"+day;
  }

  getPieChartRecords(){
     // Pie
     this.pieChartLabels = ['Critical Low', 'Slightly Low', 'Normal', 'Slightly High', 'Critical High'];
     this.pieChartType = 'pie';
     this.pieChartData = [0, 0, 0, 0, 0];
     this.pieChartColors= [ { backgroundColor: ['#b9cff0', '#dfb9f1', '#e0e0e0','#f7b391','#ff6060'] } ];


     var filter_data = {
       "start_date" : this.start_date,
       "end_date": this.end_date,
       "data_type": "heart_rate"
     };
     console.log(filter_data);

     this.authService.getHeartBitList(filter_data)
     .subscribe(data=>{
          console.log(data);
          this.decryptData(data);
          if(data.success==true && data.responseContent.heart_rate!=undefined && data.responseContent.heart_rate.length>0){
             this.heart_rate = data.responseContent.heart_rate;
             var cl=0, sl=0,n=0,sh=0,ch=0;
             var heart_data = data.responseContent.heart_rate;

             for(var i=0; i<heart_data.length; i++){
             var cmp_data = parseInt(heart_data[i].heart_rate);
                  if(cmp_data<60){
                       cl++;
                  }else if(cmp_data>60  && cmp_data<=70){
                       sl++;
                  }else if(cmp_data>70  && cmp_data<=90){
                       n++;
                  }else if(cmp_data>90  && cmp_data<=100){
                       sh++;
                  }else if(cmp_data>100){
                       ch++;
                  }
             }
             console.log('Critically low:',cl,'Slightly low:',sl,'Normal:', n,'Slightly High:',sh,'Critically High:',ch);
          }
          this.pieChartData = [cl, sl, n, sh, ch];

     });

  }

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
