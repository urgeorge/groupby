import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { AuthUtilsService } from '@modules/auth/services';
import { Post } from '@modules/blog/models';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'sb-home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './home.component.html',
    styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
    subscription: Subscription = new Subscription();
    isLoggedIn = false;

    constructor(
        private authUtilsService: AuthUtilsService,
        private changeDetectorRef: ChangeDetectorRef
    ) {}
    ngOnInit() {
        this.subscription.add(
            this.authUtilsService.isLoggedIn$().subscribe(isLoggedIn => {
                this.isLoggedIn = isLoggedIn;
                this.changeDetectorRef.detectChanges();
            })
        );
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
