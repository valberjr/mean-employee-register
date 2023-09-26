import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './employees/employee-form/employee-form.component';
import { EmployeesComponent } from './employees/employees.component';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, EmployeesComponent, EmployeeFormComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
