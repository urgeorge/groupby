import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-layout-blog',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './layout-blog.component.html',
    styleUrls: ['layout-blog.component.css'],
})
export class LayoutBlogComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
