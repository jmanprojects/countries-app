import { TestBed } from '@angular/core/testing';

import { CountriesServiceService } from './countries-service.service';

describe('CountriesServiceService', () => {
  let service: CountriesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
