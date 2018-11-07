import { Component, OnInit, Input } from '@angular/core';
import { MatSelectChange } from '@angular/material';
import { FormGroup } from '@angular/forms';
export interface Job{
  label: string
  value: string
}
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  @Input() parentForm: FormGroup;

  jobs: Array<Job> = [];
  readonly serviceJobs: Array<Job> = [
    { label: 'Manager', value: 'manager' },
    { label: 'Host', value: 'host' },
    { label: 'Tuttofare', value: 'tuttofare' },
    { label: 'Waitress', value: 'waitress' },
    { label: 'Dining room manager', value: 'dining room manager' },
  ]
  readonly kitchenJobs: Array<Job> = [
    { label: 'Chef', value: 'chef' },
    { label: 'Sous chef', value: 'sous chef' },
    { label: 'Dishwasher', value: 'dishwasher' },
    { label: 'Cook', value: 'cook' },
  ]
  constructor() { }

  ngOnInit() {
    this.selectJobs(this.parentForm.value.jobArea);
  }
  selectJobs(jobArea) {
    if (jobArea === 'kitchen') {
      this.jobs = this.kitchenJobs;
    } else {
      this.jobs = this.serviceJobs;
    }
    this.parentForm.controls.jobTitle.setValue(this.jobs[0].value)
  }
  onAreaChange(event: MatSelectChange) {
    this.selectJobs(event.value);
  }

}
