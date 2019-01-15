import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Employee } from '../models/employee.model';


@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit  {

  private selectedEmployeeId: number
  @Input() employee: Employee;

  // @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.selectedEmployeeId = +this._activatedRoute.snapshot.paramMap.get('id')
  }
}
