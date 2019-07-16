import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import {AppSettingService} from './app-setting.service';

import { RocketInfo  } from "./rocket-info";

const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class RocketInfoService {

  baseUrl:string;
  constructor(private http: HttpClient, private appSettingService:AppSettingService) {

    this.appSettingService.getSettings()
    .subscribe(
      settings => {
        this.baseUrl = settings.baseUrl;
      }
    )

  }


  add(rocketInfo:RocketInfo) : Observable<RocketInfo>
  {
    const url:string = `${this.baseUrl}/api/rocketinfo`;
    console.log(url);
    return this.http.post<RocketInfo>(url, rocketInfo,httpOptions)
    .pipe(
      tap((newRocketInfo:RocketInfo) => this.log(`Rocket Info added: ${newRocketInfo}`) ),
      catchError(this.handleError<RocketInfo>('add'))
    )

  }

  private handleError<T>(operation = 'operation', result? : T) {
    return (error: any) : Observable<T> => {

      console.error(error);
      this.log(`RocketInfo Service - ${operation} failed: ${error.message}`);
      return of(result as T);
    }
    
  }

  private log(message:string): void {
    console.log(message);
  }


}
