import { TestBed } from '@angular/core/testing';

import { EntrySiteGuard } from './entry-site.guard';

describe('EntrySiteGuard', () => {
  let guard: EntrySiteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EntrySiteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
