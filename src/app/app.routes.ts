

//import { Routes } from '@angular/router';

//export const routes: Routes = [];
// src/app/app.routes.ts

//import { Routes } from '@angular/router';
//import { DashboardComponent } from './dashboard/dashboard.component';
//import { BenchmarkingComponent } from './benchmarking/benchmarking.component'; // Ensure you import both components

//export const routes: Routes = [
 // { path: 'dashboard', component: DashboardComponent },
  //{ path: 'benchmarking', component: BenchmarkingComponent },
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route
//];
// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { BenchmarkingComponent } from './benchmarking/benchmarking.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
 
  { path: 'benchmarking', component: BenchmarkingComponent }
];
