import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { EmployeeService } from '../employee.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  
  employee: Employee[] = [];
  selectedEmployee?: Employee;
  constructor(private employeeService: EmployeeService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  
 onSelect (employee:Employee): void {
  this.selectedEmployee = employee;
  this.messageService.add(`EmployeesComponent: Selected employee id=${employee.id}`);
 }
 getEmployees(): void {
  this.employeeService.getEmployees()
      .subscribe(employees => this.employee = employees);
}

}
