import { TestBed } from '@angular/core/testing';

import { RocketInfoService } from './rocket-info.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RocketInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [],
    imports: [HttpClientTestingModule],
    providers: []
  }));

  it('should be created', () => {
    const service: RocketInfoService = TestBed.get(RocketInfoService);
    expect(service).toBeTruthy();
  });
});
