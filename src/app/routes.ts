import { Routes } from '@angular/router';

import { EmployeesContainer } from './containers/employees.component';

export const applicationRoutes: Routes = [
  {
    path: 'employees',
    component: EmployeesContainer,
  },
  { path: '',
    redirectTo: '/employees',
    pathMatch: 'full'
  },
]