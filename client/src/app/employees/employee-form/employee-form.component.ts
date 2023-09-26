import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styles: [],
})
export class EmployeeFormComponent {
  submitted = false;

  constructor(public service: EmployeeService, private toastr: ToastrService) {}

  onSubmit() {
    this.submitted = true;
    if (this.service.employeeForm.valid) {
      if (this.service.employeeForm.get('_id')?.value === '') {
        this.service.postEmployee().subscribe((res) => {
          this.resetForm();
          this.service.fetchEmployees();
          this.toastr.success('Created successfully', 'Employee Register');
        });
      } else {
        this.service.putEmployee().subscribe((res) => {
          this.resetForm();
          this.service.fetchEmployees();
          this.toastr.info('Updated successfully', 'Employee Register');
        });
      }
    }
  }

  resetForm() {
    this.service.employeeForm.reset();
    this.submitted = false;
  }
}
