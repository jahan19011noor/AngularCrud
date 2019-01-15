import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit  {

  @Input() employee: Employee;

  // emits only one value
  // @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  // emits only one value
  // for multiple value emiting create custom type
  @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.notify.emit(this.employee)
  }
}
