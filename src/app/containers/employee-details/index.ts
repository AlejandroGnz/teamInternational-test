import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    tipRate: new FormControl(null, )
  })
  validateAge(control: FormControl) {
    const dateYear: number = new Date(control.value).getFullYear();
    const currentYear: number = new Date().getFullYear()
    if (currentYear - dateYear < 18) {
      return { dateOfBirth: { valid: false }};
    }
    return null
  }
  handleSubmit(event) {
    console.log(this.employeeForm.value);
  }
}