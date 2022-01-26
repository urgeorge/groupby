/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { EntrySiteModule } from './entry-site.module';

/* Containers */
import * as entrySiteContainers from './containers';

/* Guards */
import * as entrySiteGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        component: entrySiteContainers.HomeComponent,
    },
    {
        path: 'about',
        component: entrySiteContainers.AboutComponent,
    },
];

@NgModule({
    imports: [EntrySiteModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class EntrySiteRoutingModule {}
