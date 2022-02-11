import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as homeServices from "../home/services";
import * as homeGuards from "../home/guards";
import * as homeComponents from "../home/components";
import {NavigationModule} from "../navigation/navigation.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  imports: [
    CommonModule,
    NavigationModule,
    FontAwesomeModule,
  ],
  providers: [...homeServices.services, ...homeGuards.guards],
  declarations: [...homeComponents.components],
  exports: [...homeComponents.components],
})
export class HomeModule { }
