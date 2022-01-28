import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as homeServices from "../home/services";
import * as homeGuards from "../home/guards";
import * as homeComponents from "../home/components";

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [...homeServices.services, ...homeGuards.guards],
  declarations: [...homeComponents.components],
  exports: [...homeComponents.components],
})
export class HomeModule { }
