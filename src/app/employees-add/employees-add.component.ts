import { Component, OnInit } from "@angular/core";
import { Employee } from "../employee";
import { EmployeesService } from "../employees/employees.service";

@Component({
  selector: "app-employees-add",
  templateUrl: "./employees-add.component.html",
  styleUrls: ["./employees-add.component.css"]
})
export class EmployeesAddComponent implements OnInit {
  
  constructor(private employeeService: EmployeesService) {}

  ngOnInit() {}

  employeeObject = new Employee(
    "Mohtadi",
    "50K",
    "Ingeniero Jefe",
    "link_to_my_image"
  );
  errorMsg;

  submitForm() {
    this.employeeService.setEmployee(this.employeeObject)
    .subscribe(
      data => { console.log(data)},
      error => {
        return (this.errorMsg = error);
      }
    );
  }
}
