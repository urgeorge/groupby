import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationService } from '../../../../modules/navigation/services';



@Component({
    selector: 'sb-top-nav',
    templateUrl: './top-nav.component.html',
    styleUrls: ['top-nav.component.css'],
})
export class TopNavComponent implements OnInit, OnDestroy {

    isMenuCollapsed = true;

    constructor(
        private navigationService: NavigationService,
    ) {}
    ngOnInit() {
    }
    ngOnDestroy() {

    }
}
