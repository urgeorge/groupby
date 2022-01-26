import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'layout-entry-site',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './layout-entry-site.component.html',
    styleUrls: ['layout-entry-site.component.css'],
})
export class LayoutEntrySiteComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
