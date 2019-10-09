import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  apiUrl = "/api/v1/users/";
  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(`/api/v1/users/`);
  }

  getEmployee(id) {
    return this.http.get(`/api/v1/users/${id}`);
  }

}
