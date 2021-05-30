import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

    private appConfig: any;

    constructor(private httpClient: HttpClient){}

    loadAppConfig(){
    return this.httpClient.get('/assets/config.json')
            .toPromise()
            .then(data => {
            this.appConfig = data;
        });
    }

    public getApiBaseUrl(){
        return this.appConfig.apiBaseUrl;
    }
}
