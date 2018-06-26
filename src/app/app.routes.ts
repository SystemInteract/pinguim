import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const ROUTES: Routes = [
  { path: 'home', component: MainComponent },
  {
    path: 'login',
    component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
  },
  { path: '', pathMatch: 'full', redirectTo: '/login' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);
