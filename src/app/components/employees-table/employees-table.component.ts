import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Employee, DELETE_EMPLOYEE } from '../../reducers/employees.reducers';

interface AppState {
  employees: Employee[];
}
@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css']
})
export class EmployeesTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age', 'username', 'hireDate', 'actions'];
  dataSource: Observable<Employee[]> | null = null
  constructor(private store: Store<AppState>) {
    this.dataSource = store.pipe(select('employees'));
  }

  ngOnInit() {
  }
  deleteEmployee(employee) {
    this.store.dispatch({
      type: DELETE_EMPLOYEE,
      payload: {
        uid: employee.uid,
      }
    })
  }

}
