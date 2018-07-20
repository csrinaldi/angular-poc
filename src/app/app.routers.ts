import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TestComponent} from './test/test-component/test.component';
import {TestResolver} from './test/test.resolver';

/**
 * Routers
 *
 */
const rootRouters = [
  {path: '', redirectTo: 'tests', pathMatch: 'full'},
  {
    path: 'tests',
    component: TestComponent,
    resolve: {
      localTests: TestResolver
    }
  },
];

export const APP_ROUTERS: ModuleWithProviders = RouterModule.forRoot(rootRouters, {onSameUrlNavigation: 'reload'});
