/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
/* Modules */
import {NavigationModule} from "../navigation/navigation.module";

/* Components */
import * as entrySiteComponents from './components';

/* Containers */
import * as entrySiteContainers from './containers';

/* Guards */
import * as entrySiteGuards from './guards';

/* Services */
import * as entrySiteServices from './services';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NavigationModule,
    FontAwesomeModule,
    NgSelectModule,
  ],
    providers: [...entrySiteServices.services, ...entrySiteGuards.guards],
    declarations: [...entrySiteContainers.containers, ...entrySiteComponents.components],
    exports: [...entrySiteContainers.containers, ...entrySiteComponents.components],
})
export class EntrySiteModule {}
