import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from './product';
import {AppSettingService} from './app-setting.service';

//const httpHeaders = new HttpHeader


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl:string;

  constructor(private http: HttpClient, private appSettingService: AppSettingService) {

    this.appSettingService.getSettings()
    .subscribe(
      settings => {
        this.baseUrl = settings.baseUrl;
      }
    );

  }

  getProducts():Observable<Product[]> {
    const url = `${this.baseUrl}/api/products`;
    return this.http.get<Product[]>(url);
  }
}
