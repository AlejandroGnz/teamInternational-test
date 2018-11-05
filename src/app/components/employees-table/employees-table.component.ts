import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css']
})
export class EmployeesTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age', 'userName', 'hireDate', 'actions'];
  dataSource: Array<any> = [{
    name: 'alejandro',
    age: 'alejandro',
    userName: 'alejandro',
    hireDate: '10/10/2018'
  }]
  constructor() { }

  ngOnInit() {
  }
  deleteEmployee(employee):void {
    console.log(employee);
  }

}
