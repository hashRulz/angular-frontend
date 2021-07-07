import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from './AppConstants';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // private baseURL = "http://localhost:8080/api/v1/employees";
  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    let url=AppConstants.baseURL+ AppConstants.getEmployee;
    return this.httpClient.get<Employee[]>(url);  
  }

  createEmployee(employee:Employee):Observable<Object>{
    let url=AppConstants.baseURL+AppConstants.saveEmployee;
    return this.httpClient.post(url ,employee);
  }
}
