/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { EntrySiteModule } from './entry-site.module';

/* Containers */
import * as entrySiteComponents from './components';

/* Guards */
import * as entrySiteGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        component: entrySiteComponents.EntryComponent,
    },
];

@NgModule({
    imports: [EntrySiteModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class EntrySiteRoutingModule {}
