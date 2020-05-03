import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/employees';

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    
    return this.http.post(`${environment.getEmployeeDetail}/${id}`, { responseType: 'text' });
  
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post((environment.createEmployees), employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${environment.updateEmployee}/${id}`, value);
  }

  deleteEmployee(id: any): Observable<any> {
    return this.http.delete(`${environment.deleteEmployee}/${id}`, { responseType: 'text' });
 }

  getEmployeesList(): Observable<any> {
    return this.http.get<any>(environment.getAllEmployees);
  }
}
