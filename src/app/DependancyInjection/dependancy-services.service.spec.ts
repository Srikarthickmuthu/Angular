import { TestBed } from '@angular/core/testing';

import { DependancyServicesService } from './dependancy-services.service';

describe('DependancyServicesService', () => {
  let service: DependancyServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DependancyServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
