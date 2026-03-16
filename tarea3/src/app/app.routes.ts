import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { DriversComponent } from './pages/drivers/drivers';
import { DriversCards } from './pages/drivers-cards/drivers-cards';
import { Auth } from './pages/login-page/auth/auth';
import { Edit } from './pages/profile-page/edit/edit';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'drivers', component: DriversComponent },
  { path: 'drivers/cards', component: DriversComponent },
  { path: 'auth/login', component: Auth },
  { path: 'profile/edit', component: Edit },
  {path: 'drivers/cards', component:DriversCards}
];