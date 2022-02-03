
import { LayoutEntrySiteComponent } from './layout-entry-site/layout-entry-site.component';
import { LayoutErrorComponent } from './layout-error/layout-error.component';
import { LayoutWithSidenavComponent} from "./layout-with-sidenav/layout-with-sidenav.component";

export const layouts = [LayoutErrorComponent, LayoutEntrySiteComponent,LayoutWithSidenavComponent];

export * from './layout-error/layout-error.component';
export * from './layout-entry-site/layout-entry-site.component';
export * from './layout-with-sidenav/layout-with-sidenav.component';
