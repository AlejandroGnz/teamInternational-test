import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './custom-modules/material.module';
import { applicationRoutes } from './routes';

import { EmployeesContainer } from './containers/employees.component';

import { AppComponent } from './app.component';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
import { SearchEmployeeComponent } from './components/search-employee/search-employee.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeesContainer,
    EmployeesTableComponent,
    SearchEmployeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      applicationRoutes,
      { enableTracing: true }
    ),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
