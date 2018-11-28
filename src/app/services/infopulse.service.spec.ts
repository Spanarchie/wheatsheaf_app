import { TestBed } from '@angular/core/testing';

import { InfopulseService } from './infopulse.service';

describe('InfopulseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfopulseService = TestBed.get(InfopulseService);
    expect(service).toBeTruthy();
  });
});
