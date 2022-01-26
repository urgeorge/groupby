import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';

import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faLock} from "@fortawesome/free-solid-svg-icons";

const container = document.getElementById('container');

@Component({
    selector: 'sb-home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './home.component.html',
    styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {

    faUsername = faUser;
    faPassword = faLock;

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
    ) {
    }
    ngOnInit() {
      this.changeDetectorRef.detectChanges();
    }

    ngOnDestroy() {

    }
    goLeft(){
      let container = document.getElementById('container');
        container?.classList.add("right-panel-active");
    }
    goRight(){
      let container = document.getElementById('container');
        container?.classList.remove("right-panel-active");
    }
}
