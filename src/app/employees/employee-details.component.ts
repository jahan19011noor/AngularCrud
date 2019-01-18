import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { EmployeeService } from './employee.service'
import { Employee } from '../models/employee.model';
import { Router } from '@angular/router'

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  private _id: number;
  employee: Employee;

  constructor(private _activeRoute: ActivatedRoute, 
              private _employeeService: EmployeeService,
              private _router: Router) { }

  ngOnInit() {
    // this._id = +this._activeRoute.snapshot.paramMap.get('id');
    this._activeRoute.paramMap.subscribe(params => {
      this._id = +params.get('id')
      this. employee = this._employeeService.getEmployee(this._id)
    })
    
  }

  viewNextEmployee() {
    if(this._id < 3) {
      this._id = this._id + 1;
    }else {
      this._id = 1;
    }
    // this._id = this._id + 1;
    this._router.navigate(['/employees', this._id], {
      queryParamsHandling: 'preserve'
    })
  }

}
