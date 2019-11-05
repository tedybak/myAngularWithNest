import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import {EmployeesDetaillsComponent} from './employees-detaills/employees-detaills.component';
import { EmployeesAddComponent } from './employees-add/employees-add.component';


const routes: Routes = [
  { path: 'employee' , component: EmployeesComponent },
  { path: 'employee/:id' , component: EmployeesDetaillsComponent },
  { path:'addEmployee', component: EmployeesAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
