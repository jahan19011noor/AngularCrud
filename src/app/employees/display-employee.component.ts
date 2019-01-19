import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Employee } from '../models/employee.model';


@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit  {

  private selectedEmployeeId: number
  @Input() employee: Employee;
  @Input() searchTerm: string;

  // @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private _activatedRoute: ActivatedRoute,
            private _router: Router) { }

  ngOnInit() {
    this.selectedEmployeeId = +this._activatedRoute.snapshot.paramMap.get('id')
  }

  viewEmployee()
  {
      // this._router.navigate(['destination', 'route_parameter'])
      this._router.navigate(['/employees', this.employee.id], {
        queryParams: {
          'searchTerm': this.searchTerm
        }
      })
  }
}
