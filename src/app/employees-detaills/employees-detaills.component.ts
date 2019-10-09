import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../employees/employees.service';



@Component({
  selector: 'app-employees-detaills',
  templateUrl: './employees-detaills.component.html',
  styleUrls: ['./employees-detaills.component.css']
})
export class EmployeesDetaillsComponent implements OnInit {

  current_param;
  current_employee;
  constructor(private route: ActivatedRoute, private employeesService: EmployeesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.current_param = this.route.snapshot.params['id'];
    });

    this.employeesService.getEmployee(this.current_param).subscribe((data) => {
      this.current_employee = data
    })
  }
}
