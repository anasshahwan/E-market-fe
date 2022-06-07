import { TestBed } from '@angular/core/testing';

import { CompantService } from './compant.service';

describe('CompantService', () => {
  let service: CompantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
