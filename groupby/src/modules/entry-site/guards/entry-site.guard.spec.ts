import { TestBed } from '@angular/core/testing';

import { PostGuard } from './entry-site.guard';

describe('Error Guards', () => {
  let postGuard: PostGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [PostGuard],
    });
    postGuard = TestBed.inject(PostGuard);
  });

  describe('canActivate', () => {
    it('should return an Observable<boolean>', () => {
      postGuard.canActivate().subscribe(response => {
        expect(response).toEqual(true);
      });
    });
  });
});
