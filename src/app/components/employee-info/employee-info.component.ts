import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

export interface Country {
  name: string
  alpha2Code: string
}
@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeFormComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() isEditing: boolean;
  @Input() viewmode: boolean;
  maxDate = new Date().toISOString();
  countries: Country[] = []
  filteredCountries: Observable<Country[]>;

  constructor(http: HttpClient) {
    http.get('https://restcountries.eu/rest/v2/all')
    .toPromise()
    .then((response: Country[]) => {
      this.countries = response;
      this.filteredCountries = this.parentForm.controls.country.valueChanges
      .pipe(
        startWith(''),
        map(country => country ? this.filterCountries(country) : this.countries.slice())
      )
    })
  }
  filterCountries(value: string): Country[] {
    const filterValue = value.toLowerCase();

    return this.countries.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }
  ngOnInit() {
  }

}
