import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Drivers } from './pages/drivers/drivers';
import { DriversComponent } from './pages/drivers/drivers';

export const routes: Routes = [ { path: 'dashboard', component: Dashboard } , {path: 'drivers', component:Drivers } , {path: 'drivers', component:DriversComponent }];
