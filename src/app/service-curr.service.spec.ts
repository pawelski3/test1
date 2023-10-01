import { TestBed } from '@angular/core/testing';

import { ServiceCurrService } from './service-curr.service';

describe('ServiceCurrService', () => {
  let service: ServiceCurrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCurrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
