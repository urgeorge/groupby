import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
    let authService: AuthService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthService],
        });
      authService = TestBed.inject(AuthService);
    });

    describe('getError$', () => {
        it('should return Observable<Error>', () => {
          authService.getError$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
