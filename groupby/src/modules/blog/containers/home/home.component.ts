import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { Post } from '../../../../modules/blog/models';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'sb-home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './home.component.html',
    styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {


    constructor(
        private changeDetectorRef: ChangeDetectorRef
    ) {}
    ngOnInit() {
      this.changeDetectorRef.detectChanges();

    }
    ngOnDestroy() {

    }
}
