import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeesComponent } from './employees/employees.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesDetaillsComponent } from './employees-detaills/employees-detaills.component';
import { EmployeesAddComponent } from './employees-add/employees-add.component';

import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeesComponent,
    EmployeesDetaillsComponent,
    EmployeesAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
