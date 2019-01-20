import { TestBed } from '@angular/core/testing';

import { AroundService } from './around.service';

describe('AroundService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AroundService = TestBed.get(AroundService);
    expect(service).toBeTruthy();
  });
});
