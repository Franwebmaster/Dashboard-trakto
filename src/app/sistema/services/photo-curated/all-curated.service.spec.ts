import { TestBed } from '@angular/core/testing';

import { AllCuratedService } from './all-curated.service';

describe('AllCuratedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllCuratedService = TestBed.get(AllCuratedService);
    expect(service).toBeTruthy();
  });
});
