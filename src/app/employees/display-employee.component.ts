import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit  {
  // @Input() employeeId: number
  // private _employee: Employee
  private _employeeId: number

  @Input()
  set employeeId (val: number){
    console.log('Employee Id changed from '+ JSON.stringify(this._employeeId) + ' to ' + JSON.stringify(val));
    this._employeeId = val;
  }

  get employeeId(): number {
    return this._employeeId
  }
  
  private _employee: Employee

  @Input()
  set employee(val: Employee) {
    // console.log('previous: ' + (this._employee ? this._employee.name : 'NULL'))
    // console.log('Current: ' + val.name)
    console.log('Employee Id changed from '+ JSON.stringify(this._employee) + ' to ' + JSON.stringify(val));
    this._employee = val;
  }

  get employee(): Employee {
    return this._employee
  }

  //input change detection with ngOnChanges
  // ngOnChanges(changes: SimpleChanges) {
  //   for(const propName of Object.keys(changes))
  //   {
  //     // console.log(propName);
  //     const change = changes[propName];
  //     const from = JSON.stringify(change.previousValue);
  //     const to = JSON.stringify(change.currentValue);

  //     console.log(propName + ' changed from '+ from + ' to ' + to)
  //   }
  // }
  //input change detection with ngOnChanges

  //input change detection using proerty setters



  //input change detection using proerty setters

  constructor() { }

  ngOnInit() {
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   const previousEmployee = <Employee>changes.employee.previousValue;
  //   const currentEmployee = <Employee>changes.employee.currentValue;


  // }

}
