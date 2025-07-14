import { Routes } from '@angular/router';
import { LOGIN_ROUTES } from './login/login.routes';
import { DASHBOARD_ROUTES } from './dashboard/dashboard.routes';
import { LayoutComponent } from './main-layout/layout.component';
import { PROFILE_ROUTES } from './profile/profile.routes';
import { FEATURES_ROUTES } from './features/features.routes';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', children: LOGIN_ROUTES },
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [AuthGuard],   ##this is for future use, with protected routes
    
    children: [
      { path: 'dashboard', children: DASHBOARD_ROUTES },
      { path: 'profile', children: PROFILE_ROUTES },
      { path: 'features', children: FEATURES_ROUTES },
      // Add other pages here
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];
