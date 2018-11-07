import { Component } from '@angular/core';
import { Router } from "@angular/router"
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Employee, ADD_EMPLOYEE } from '../../reducers/employees.reducers';

interface AppState {
  employees: Employee[];
}
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetails {
  employeeForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
    ]),
    dateOfBirth: new FormControl(null, [
      Validators.required,
      this.validateAge,
    ]),
    country: new FormControl(null, [
      Validators.required,
    ]),
    username: new FormControl(null, [
      Validators.required,
    ]),
    hireDate: new FormControl(null, [
      Validators.required,
    ]),
    active: new FormControl(true),
    jobArea: new FormControl('services'),
    jobTitle: new FormControl(null, [
      Validators.required
    ]),
  })
  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {}
  validateAge(control: FormControl) {
    const dateYear: number = new Date(control.value).getFullYear();
    const currentYear: number = new Date().getFullYear()
    if (currentYear - dateYear < 18) {
      return { dateOfBirth: { valid: false }};
    }
    return null
  }
  handleSubmit(event) {
    const employee: Employee = {
      uid: new Date().getTime().toString(),
      ...this.employeeForm.value
    }
    this.store.dispatch({
      type: ADD_EMPLOYEE,
      payload: {
        employee,
      }
    })
    this.router.navigate(['/employees'])
  }
}