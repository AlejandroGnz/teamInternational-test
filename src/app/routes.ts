import { Routes } from '@angular/router';

import { EmployeeList } from './containers/employee-list';
import { EmployeeDetails } from './containers/employee-details';

export const applicationRoutes: Routes = [
  { path: 'employees', component: EmployeeList },
  { path: 'employees/new', component: EmployeeDetails, data: { prefilled: true } },
  { path: 'employees/:id', component: EmployeeDetails, data: { prefilled: false } },
  { path: '', redirectTo: '/employees', pathMatch: 'full' }
]