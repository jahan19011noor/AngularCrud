import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[]
  filteredEmployees: Employee[];
  // searchTerm: string;
  private _searchTerm: string;
  
  get searchTerm(): string {
    return this._searchTerm
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filtereEmployees(value);
  }

  filtereEmployees(searchString: string){
    return this.employees.filter(
      employee => 
        employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  private arrayIndex = 1;
  constructor(private _router: Router,
              private _route: ActivatedRoute) { 
                this.employees = this._route.snapshot.data['employeeList']
                if(this._route.snapshot.queryParamMap.has('searchTerm')) {
                  this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm')
                }
                else {
                  this.filteredEmployees = this.employees;
                  // console.log('Else Block: ' + new Date().toTimeString())
                }
               }

  ngOnInit() {
    // this._employeeService.getEmployees().subscribe((employeeList) => {
    //   this.employees = employeeList;
    //   // console.log('Subscript: '+ new Date().toTimeString())
    //   if(this._route.snapshot.queryParamMap.has('searchTerm')) {
    //     this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm')
    //   }
    //   else {
    //     this.filteredEmployees = this.employees;
    //     // console.log('Else Block: ' + new Date().toTimeString())
    //   }
    // });
    // this.filteredEmployees = this.employees
    // console.log(this._route.snapshot.queryParamMap.has('searchTerm'))
    // console.log(this._route.snapshot.queryParamMap.get('searchTerm'))
    // console.log(this._route.snapshot.queryParamMap.getAll('searchTerm'))
    // console.log(this._route.snapshot.queryParamMap.keys)
    // console.log(this._route.snapshot.paramMap.keys)

    // if(this._route.snapshot.queryParamMap.has('searchTerm')) {
    //   this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm')
    // }
    // else {
    //   this.filteredEmployees = this.employees;
    //   console.log('Else Block: ' + new Date().toTimeString())
    // }
  }

  // changeEmployeeName() {
  //   this.employees[0].name = 'Jordan';
  //   this.filteredEmployees = this.filtereEmployees(this.searchTerm); 
  //   // const newEmployeeArray: Employee[] = Object.assign([], this.employees);
  //   // newEmployeeArray[0].name = 'Jordan'
  //   // this.employees = newEmployeeArray
  // }

  // onMouseMove() {

  // }

  // onClick(employeeId: number) {
  //   // this._router.navigate(['destination', 'route_parameter'])
  //   this._router.navigate(['/employees', employeeId], {
  //     queryParams: {
  //       'searchTerm': this.searchTerm,
  //       'testParam': 'testValue'
  //     }
  //   })
  // }
}
