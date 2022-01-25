/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import {NavigationModule} from "../navigation/navigation.module";

/* Components */
import * as blogComponents from './components';

/* Containers */
import * as blogContainers from './containers';

/* Guards */
import * as blogGuards from './guards';

/* Services */
import * as blogServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        NavigationModule,
    ],
    providers: [...blogServices.services, ...blogGuards.guards],
    declarations: [...blogContainers.containers, ...blogComponents.components],
    exports: [...blogContainers.containers, ...blogComponents.components],
})
export class BlogModule {}
