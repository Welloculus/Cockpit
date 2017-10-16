import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { AppConfig } from '../../app/config/app.config';

@Injectable()
export class AuthService {
     authToken:any;
     user:any;
     userdata:any;
     host:string;
     port:string;
     auth_token:string;

  constructor(
  private http:Http,
  private config: AppConfig,
  ){
       this.userdata = JSON.parse(localStorage.getItem('user'));
       this.host = config.getConfig('host');
       this.port = config.getConfig('port');
       this.auth_token = config.getConfig('auth_token');
/*
       console.log("Host->"+this.host);
       console.log("Port->"+this.port);
       console.log("Auth_token->"+this.auth_token);
*/
  }


  authenticateUser(user){
/*       console.log(user); */
       if(user.username=='provider' && user.password=='pass@123'){
            return this.http.get('./assets/data/provider.json')
            .map(res => res.json());

       }else if(user.username=='facilitator' && user.password=='pass@123'){
            return this.http.get('./assets/data/faciliator.json')
            .map(res => res.json());

       }else if(user.username=='supplier' && user.password=='pass@123'){
            return this.http.get('./assets/data/supplier.json')
            .map(res => res.json());

       }else{
            return this.http.get('./assets/data/error.json')
            .map(res => res.json());
       }
  }

  getDeviceList(){
       let headers: Headers = new Headers();
       headers.append('Authorization', this.auth_token);
       headers.append('userId', this.userdata.id);

       return this.http.get('http://'+this.host+':'+this.port+'/ApiGateway/'+this.userdata.user_type+'/devices/getDevices', { headers: headers })
      .map(res => res.json());
  }

  getDeviceDetails(id){

       let headers: Headers = new Headers();
       headers.append('Authorization', this.auth_token);
       headers.append('userId', this.userdata.id);
       headers.append('deviceId', id);

       return this.http.get('http://'+this.host+':'+this.port+'/ApiGateway/'+this.userdata.user_type+'/devices/getDevices', { headers: headers })
      .map(res => res.json());
  }

  getPatientList(){
       let headers: Headers = new Headers();
       headers.append('Authorization', this.auth_token);
       headers.append('userId', this.userdata.id);


       return this.http.get('http://'+this.host+':'+this.port+'/ApiGateway/'+this.userdata.user_type+'/patients/getPatients', { headers: headers })
      .map(res => res.json());

  }

  getHeartBitList(filter_data){
       let headers: Headers = new Headers();
       headers.append('Authorization', this.auth_token);
       headers.append('userId', this.userdata.id);

       return this.http.post('http://'+this.host+':'+this.port+'/ApiGateway/'+this.userdata.user_type+'/healthRecords/getHealthRecords', filter_data, { headers: headers })
      .map(res => res.json());

  }

  storeUserData(token, user){
     localStorage.setItem('id_token', token);
     localStorage.setItem('user', JSON.stringify(user));
     this.authToken = token;
     this.user = user;
  }

  loadToken(){
     const token = localStorage.getItem('id_token');
     this.authToken = token;
  }

  deviceList(){
       return this.http.get('assets/data/devices.json')
      .map(res => res.json());
  }

  loggedIn(){
     return tokenNotExpired('id_token');
  }

  logout(){
     this.authToken = null;
     this.user = null;
     localStorage.clear();
  }

}
