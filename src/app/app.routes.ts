import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const ROUTES: Routes = [
  { path: 'mainForm', component: MainComponent },
  { path: '', pathMatch: 'full', redirectTo: 'mainForm' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);
