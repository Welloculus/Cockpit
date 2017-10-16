import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppConfig {

    private config: Object = {
        "host": "192.168.146.54",
        "port": "80",
        "auth_token": "Basic c3VwZXJ1c2VyOnN1cGVydXNlcg=="
    };

    private env:    Object = null;

    constructor(private http: Http) {

    }

    /**
     * Use to get the data found in the second file (config file)
     */
     public getConfig(key: any) {
          return this.config[key];
      }

    /**
     * Use to get the data found in the first file (env file)
     */
    public getEnv(key: any) {
        return this.env[key];
    }

    /**
    * This method:
    *   a) Loads "env.json" to get the current working environment (e.g.: 'production', 'development')
    *   b) Loads "config.[env].json" to get all env's variables (e.g.: 'config.development.json')
    */
   public load() {
     return {
        "host": "192.168.146.51",
        "port": "8181"
    }
   }
}
