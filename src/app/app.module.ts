import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive'
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive'
import { EmployeeService } from './employees/employee.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeeFilterPipe } from './employees/employee-filter.pipe'
import { EmployeeListResolverService } from './employees/employee-list-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    EmployeeService, 
    CreateEmployeeCanDeactivateGuardService,
    EmployeeListResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
