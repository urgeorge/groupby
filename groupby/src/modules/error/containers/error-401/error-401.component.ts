import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-error-401',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './error-401.component.html',
    styleUrls: ['error-401.component.css'],
})
export class Error401Component implements OnInit {
    constructor() {}
    ngOnInit() {}
}
