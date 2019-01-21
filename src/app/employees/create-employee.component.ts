import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker'
import { Department } from '../models/department.model'
import { Employee } from '../models/employee.model'
import { EmployeeService } from './employee.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @ViewChild('employeeForm') public createEmployeeForm: NgForm

  previewPhoto = false;
  panelTitle: string;
  // dateOfBirth: Date = new Date(2018, 0, 30)
  datePickerConfig: Partial<BsDatepickerConfig>

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: "",
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: 'select',
    isActive: null,
    photoPath: null
  }

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' },
    { id: 5, name: 'Admin' },
  ]

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  constructor(private _employeeService: EmployeeService,
    private _router: Router,
    private _route: ActivatedRoute) {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        // showWeekNumbers: true,
        // minDate: new Date(2018, 0, 1),
        // maxDate: new Date(2018, 11, 31),
        dateInputFormat: 'DD/MM/YYYY'
      })
  }

  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id')
      this.getEmployee(id);
    })
  }

  private getEmployee(id: number) {
    if (id === 0) {
      this.employee = {
        id: null,
        name: null,
        gender: null,
        email: "",
        phoneNumber: null,
        contactPreference: null,
        dateOfBirth: null,
        department: 'select',
        isActive: null,
        photoPath: null
      }
      this.panelTitle = 'Create Employee'
      this.createEmployeeForm.reset();
    }
    else {
      this.panelTitle = 'Edit Employee'
      // this.employee = Object.assign({}, this._employeeService.getEmployee(id));
      this._employeeService.getEmployee(id).subscribe(
        (employee) => this.employee = employee,
        (err: any) => console.log(err)
      )
    }
  }

  // saveEmployee(empForm: NgForm): void {
  saveEmployee(): void {
    // const newEmployee: Employee = Object.assign({}, this.employee)
    if(this.employee.id == null)
    {
      this._employeeService.addEmployee(this.employee).subscribe(
        (data: Employee) => {
          console.log(data)
          this.createEmployeeForm.reset();
          this._router.navigate(['list'])
        },
        (error: any) => console.log(error)
      );
    }
    else {
      this._employeeService.updateEmployee(this.employee).subscribe(
        () => {
          // console.log(data)
          this.createEmployeeForm.reset();
          this._router.navigate(['list'])
        },
        (error: any) => console.log(error)
      );
    }

    //reset will cause the modal data to reset

  }

}
