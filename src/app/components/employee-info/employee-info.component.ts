import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeFormComponent implements OnInit {
  countries: Promise<Array<any>> | null = null
  constructor(http: HttpClient) {
    http.get('https://restcountries.eu/rest/v2/all')
    .toPromise()
    .then((response:any) => {
      this.countries = response;
    })
  }

  ngOnInit() {
  }

}
