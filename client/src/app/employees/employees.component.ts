import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: [],
})
export class EmployeesComponent implements OnInit {
  constructor(public service: EmployeeService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.service.fetchEmployees();
  }

  populateForm(selectedRecord: Employee) {
    this.service.employeeForm.setValue({
      _id: selectedRecord._id,
      fullName: selectedRecord.fullName,
      position: selectedRecord.position,
      location: selectedRecord.location,
      salary: selectedRecord.salary,
    });
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteEmployee(_id).subscribe((res) => {
        this.service.fetchEmployees();
        this.toastr.error('Deleted successfully', 'Employee Register');
      });
    }
  }
}
