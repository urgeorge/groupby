import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-layout-auth',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './layout-auth.component.html',
    styleUrls: ['layout-auth.component.css'],
})
export class LayoutAuthComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
