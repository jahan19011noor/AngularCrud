import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee.component'

@Injectable({
  providedIn: 'root'
})
export class CreateEmployeeCanDeactivateGuardService implements CanDeactivate<CreateEmployeeComponent> {
  canDeactivate(component: CreateEmployeeComponent): boolean {
    if(component.createEmployeeForm.dirty) {
      return confirm('Are you sure you want to discard your changes?');
    }
    return true;
  }
  constructor() { }
}


//---------- Note -----------//
//  CanDeactive route guard does not work on the following conditions:
//      direct url enter into the browser
//      connecting to foreign urls
//      on browser close
//---------- Note -----------//