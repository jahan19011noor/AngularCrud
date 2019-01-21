import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http' 
import { throwError } from 'rxjs';
import { Employee } from '../models/employee.model'
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { ResolvedEmployeeList } from './resolved-employeeList.model';
// import 'rxjs/add/operators/delay'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = 'http://localhost:3000/employees'
  constructor(private _httpClient: HttpClient) { }

  // getEmployees(): Observable<Employee[]> {
  //   return of(this.listEmployees).pipe(delay(2000));
  // }

  getEmployees(): Observable<Employee[]> {
    return this._httpClient.get<Employee[]>(this.baseUrl)
                .pipe(
                  catchError(this.handleError)
                )
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if(errorResponse.error instanceof ErrorEvent)
    {
      console.log('Client Side Error: ', errorResponse.error.message)
    }
    else {
      console.log('Server Side Error: ', errorResponse);
    }

    // return throwError(new ResolvedEmployeeList(null, 'There is a problem with the service. We are notified & working on it. Please try again later.'))
    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.')
    // return new ErrorObservable('There is a problem with the service. We are notified & working on it. Please try again later.')
  }

  getEmployee(id: number): Observable<Employee> {
    // return this.listEmployees.find(e => e.id === id)
    return this._httpClient.get<Employee>(`${this.baseUrl}/${id}`)
    .pipe(catchError(this.handleError));
  }

  addEmployee(employee: Employee): Observable<Employee> {
    
      // const maxId = this.listEmployees.reduce(function(e1, e2) {
      //   return (e1.id > e2.id) ? e1 : e2;
      // }).id;
      // employee.id = maxId + 1
      // this.listEmployees.push(employee);
      return this._httpClient.post<Employee>(this.baseUrl, employee, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .pipe(catchError(this.handleError));
    
  }

  updateEmployee(employee: Employee): Observable<void> {
      return this._httpClient.put<void>(`${this.baseUrl}/${employee.id}`, employee, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .pipe(catchError(this.handleError));
  }

  deleteEmployee(id: number): Observable<void> {
    return this._httpClient.delete<void>(`${this.baseUrl}/${id}`)
        .pipe(catchError(this.handleError))
    // const i = this.listEmployees.findIndex(e => e.id === id)
    // if (i !== -1) {
    //   this.listEmployees.splice(i, 1);
    // }
  }
}
