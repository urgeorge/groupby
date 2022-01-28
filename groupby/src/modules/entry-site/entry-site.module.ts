/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
/* Modules */
import {NavigationModule} from "../navigation/navigation.module";

/* Components */
import * as entrySiteComponents from './components';

/* Guards */
import * as entrySiteGuards from './guards';

/* Services */
import * as entrySiteServices from './services';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavigationModule,
    FontAwesomeModule,
    FormsModule,
  ],
    providers: [...entrySiteServices.services, ...entrySiteGuards.guards],
    declarations: [...entrySiteComponents.components],
    exports: [...entrySiteComponents.components],
})
export class EntrySiteModule {}
