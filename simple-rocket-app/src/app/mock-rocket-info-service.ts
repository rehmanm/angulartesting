import { Observable, of } from 'rxjs';
import {RocketInfo} from './rocket-info';

//const httpHeaders = new HttpHeader

export class MockRocketInfoService {
  constructor() {


  }

  add(rocketInfo:RocketInfo) : Observable<RocketInfo>
  {
    rocketInfo.firstName = 'added';
    return of(
      rocketInfo
    );

  }
}
