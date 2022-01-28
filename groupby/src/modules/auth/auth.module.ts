import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavigationModule} from "../navigation/navigation.module";
import * as authServices from "../auth/services";
import * as authGuards from "../auth/guards";
import * as authComponents from "../auth/components";



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NavigationModule,
  ],
  providers: [...authServices.services, ...authGuards.guards],
  declarations: [...authComponents.components],
  exports: [...authComponents.components],
})
export class AuthModule { }
