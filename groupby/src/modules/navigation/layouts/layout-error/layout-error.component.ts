import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-layout-error',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './layout-error.component.html',
    styleUrls: ['layout-error.component.css'],
})
export class LayoutErrorComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
