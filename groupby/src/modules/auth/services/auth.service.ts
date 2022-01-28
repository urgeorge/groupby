import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {
    constructor() {}

    getError$(): Observable<{}> {
        return of({});
    }
}
