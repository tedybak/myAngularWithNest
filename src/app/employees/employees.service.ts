import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Employee } from "../employee";
import { catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EmployeesService {
  apiUrl = "/api/v1/users/";
  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get(`/api/v1/users/`);
  }

  getEmployee(id) {
    return this.http.get(`/api/v1/users/${id}`);
  }

  setEmployee(employee) {
    console.log(employee);
    return this.http
      .post("/api/v1/users/", employee)

      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error.message || "server error");
        })
      );
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server error");
  }
}
