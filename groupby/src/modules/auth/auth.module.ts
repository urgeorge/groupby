import { NgModule } from '@angular/core';
import * as authServices from "../auth/services";
import * as authGuards from "../auth/guards";
import * as authComponents from "../auth/components";
import {CommonModule} from "@angular/common";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';



@NgModule({
  imports: [
    CommonModule
  ],
  providers: [...authServices.services, ...authGuards.guards],
  declarations: [...authComponents.components, LoginComponent, RegisterComponent],
  exports: [...authComponents.components],
})
export class AuthModule { }
