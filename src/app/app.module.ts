import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { employeesReducer } from './reducers/employees.reducers'

import { MaterialModule } from './custom-modules/material.module';
import { applicationRoutes } from './routes';

import { EmployeeList } from './containers/employee-list';
import { EmployeeDetails } from './containers/employee-details';

import { AppComponent } from './app.component';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
import { SearchEmployeeComponent } from './components/search-employee/search-employee.component';
import { EmployeeFormComponent } from './components/employee-info/employee-info.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeList,
    EmployeeDetails,
    EmployeesTableComponent,
    SearchEmployeeComponent,
    EmployeeFormComponent,
    JobDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      applicationRoutes,
      // { enableTracing: true }
    ),
    StoreModule.forRoot({ employees: employeesReducer }),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
