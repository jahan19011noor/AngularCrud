import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http' 
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
  private listEmployees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('10/25/1988'),
      department: '3',
      isActive: true,
      photoPath: 'assets/images/mark.png'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      email: '',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979'),
      department: '2',
      isActive: true,
      photoPath: 'assets/images/mary.png'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      email: '',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('3/25/1976'),
      department: '3',
      isActive: true,
      photoPath: 'assets/images/john.png'
    }
  ]
  constructor(private _httpClient: HttpClient) { }

  // getEmployees(): Observable<Employee[]> {
  //   return of(this.listEmployees).pipe(delay(2000));
  // }

  getEmployees(): Observable<Employee[]> {
    return this._httpClient.get<Employee[]>('http://localhost:3000/employees')
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

  getEmployee(id: number): Employee {
    return this.listEmployees.find(e => e.id === id)
  }

  save(employee: Employee) {
    if(employee.id === null)
    {
      const maxId = this.listEmployees.reduce(function(e1, e2) {
        return (e1.id > e2.id) ? e1 : e2;
      }).id;
      employee.id = maxId + 1
      this.listEmployees.push(employee);
    }
    else {
      const foundIndex = this.listEmployees.findIndex(e => e.id === employee.id)
      this.listEmployees[foundIndex] = employee
    }
    
  }

  deleteEmployee(id: number) {
    const i = this.listEmployees.findIndex(e => e.id === id)
    if (i !== -1) {
      this.listEmployees.splice(i, 1);
    }
  }
}
