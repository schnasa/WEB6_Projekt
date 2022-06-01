import { TestBed } from '@angular/core/testing';

import { LvaStoreService } from './lva-store.service';

describe('LvaStoreService', () => {
  let service: LvaStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LvaStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
