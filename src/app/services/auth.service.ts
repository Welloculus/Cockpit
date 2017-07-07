import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
     authToken:any;
     user:any;

  constructor(private http:Http) { }


  authenticateUser(user){
       console.log(user);
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
