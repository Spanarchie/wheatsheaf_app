import { TestBed } from '@angular/core/testing';

import { InfoPulseService } from './info-pulse.service';

describe('InfoPulseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoPulseService = TestBed.get(InfoPulseService);
    expect(service).toBeTruthy();
  });
});
