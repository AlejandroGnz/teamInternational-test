import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Employee, ADD_EMPLOYEE, UPDATE_EMPLOYEE } from '../../reducers/employees.reducers';

interface AppState {
  employees: Employee[];
}
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetails implements OnInit {
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
  viewmode: boolean = false;
  isEditing: boolean = false;
  currentid: string = '';
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.isEditing = true;
        this.currentid = params.id;
        this.store.pipe(select('employees'))
          .subscribe((employees: Employee[]) => {
            const employee: Employee = employees.find(({ uid }) => params.id === uid)

            Object.keys(this.employeeForm.controls).forEach(controlName => {
              this.employeeForm.controls[controlName]
                .setValue(employee[controlName]);
            })
          })
      }
    })
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.viewmode === 'true') {
        this.viewmode = true;
        Object.keys(this.employeeForm.controls).forEach(controlName => {
          this.employeeForm.controls[controlName].disable();
        })
      }
    })
  }
  validateAge(control: FormControl) {
    const dateYear: number = new Date(control.value).getFullYear();
    const currentYear: number = new Date().getFullYear();
    if (currentYear - dateYear < 18) {
      return { dateOfBirth: { valid: false }};
    }
    return null
  }
  handleSubmit(event) {
    const dateYear: number = new Date(this.employeeForm.value.dateOfBirth).getFullYear();
    const currentYear: number = new Date().getFullYear();

    const employee: Employee = {
      uid: new Date().getTime().toString(),
      ...this.employeeForm.value,
      age: currentYear - dateYear,
    }
    if (this.isEditing === true) {
      this.store.dispatch({
        type: UPDATE_EMPLOYEE,
        payload: {
          employee: {
            ...employee,
            uid: this.currentid,
          }
        }
      })
    } else {
      this.store.dispatch({
        type: ADD_EMPLOYEE,
        payload: {
          employee,
        }
      })
    }
    this.router.navigate(['/employees'])
  }
}