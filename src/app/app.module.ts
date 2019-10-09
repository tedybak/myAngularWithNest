import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeesComponent } from './employees/employees.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesDetaillsComponent } from './employees-detaills/employees-detaills.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeesComponent,
    EmployeesDetaillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
