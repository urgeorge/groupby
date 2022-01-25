import { TestBed } from '@angular/core/testing';
import { AuthGuard } from '@modules/auth/guards';

describe('Blog Module Guards', () => {
    let authGuard: AuthGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AuthGuard],
        });
        authGuard = TestBed.inject(AuthGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            authGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });
});
