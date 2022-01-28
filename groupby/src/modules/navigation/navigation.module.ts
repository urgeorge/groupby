/* tslint:disable: ordered-imports*/
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Modules */

/* Components */
import * as navigationComponents from './components';

/* Containers */
import * as navigationContainers from './containers';

/* Layouts */
import * as appCommonLayouts from './layouts';

/* Guards */
import * as navigationGuards from './guards';

/* Services */
import * as navigationServices from './services';


@NgModule({
  imports: [CommonModule, RouterModule],
    declarations: [
        ...navigationContainers.containers,
        ...navigationComponents.components,
        ...appCommonLayouts.layouts,
    ],
    exports: [
        ...navigationContainers.containers,
        ...navigationComponents.components,
        ...appCommonLayouts.layouts,
    ],
})
export class NavigationModule {
    constructor(private navServices: navigationServices.NavigationService) {}

    static forRoot(): ModuleWithProviders<NavigationModule> {
        return {
            ngModule: NavigationModule,
            providers: [...navigationServices.services, ...navigationGuards.guards],
        };
    }
}
