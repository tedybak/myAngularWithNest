import { Component, OnInit } from '@angular/core';
import {EmployeesService} from './employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees; 
  constructor(private employeeService:EmployeesService) {
  }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((data) =>
    this.employees = data
    ); 
   }
}
