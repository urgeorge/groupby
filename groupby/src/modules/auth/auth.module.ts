import { NgModule } from '@angular/core';
import * as authServices from "../auth/services";
import * as authGuards from "../auth/guards";
import * as authComponents from "../auth/components";
import {CommonModule} from "@angular/common";



@NgModule({
  imports: [
    CommonModule
  ],
  providers: [...authServices.services, ...authGuards.guards],
  declarations: [...authComponents.components],
  exports: [...authComponents.components],
})
export class AuthModule { }
