import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { AppConfig } from './config';
@Injectable({
  providedIn: 'root'
})
export class AppSettingService {

  constructor() { }

  getSettings(): Observable<AppConfig> {
    let settings = new AppConfig();
    return of<AppConfig>(settings);
  }
}
