import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-about',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './about.component.html',
    styleUrls: ['about.component.css'],
})
export class AboutComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
