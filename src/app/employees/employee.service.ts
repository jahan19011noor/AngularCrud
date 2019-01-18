import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model'
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'
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
      email: '2345978640',
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
      email: '5432978640',
      dateOfBirth: new Date('3/25/1976'),
      department: '3',
      isActive: true,
      photoPath: 'assets/images/john.png'
    }
  ]
  constructor() { }

  getEmployees(): Observable<Employee[]> {
    return of(this.listEmployees).pipe(delay(2000));
  }

  getEmployee(id: number): Employee {
    return this.listEmployees.find(e => e.id === id)
  }

  save(employee: Employee) {
    this.listEmployees.push(employee);
  }
}
