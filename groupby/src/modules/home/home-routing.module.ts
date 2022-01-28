/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import {HomeModule} from "./home.module";

/* Containers */
import * as homeComponents from './components';

/* Guards */
import * as homeGuards from './guards';


/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        component: homeComponents.HomeComponent,
    },
];

@NgModule({
    imports: [HomeModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class HomeRoutingModule {}
