import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './custom-modules/material.module';

import { AppComponent } from './app.component';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeesTableComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
