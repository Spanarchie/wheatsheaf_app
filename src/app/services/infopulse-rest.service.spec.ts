import { TestBed } from '@angular/core/testing';

import { InfopulseRestService } from './infopulse-rest.service';

describe('InfopulseRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfopulseRestService = TestBed.get(InfopulseRestService);
    expect(service).toBeTruthy();
  });
});
