import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  
  employee: Employee[] = [];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  
 
 getEmployees(): void {
  this.employeeService.getEmployees()
      .subscribe(employees => this.employee = employees);
}
add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.employeeService.addEmployee({ name } as Employee)
    .subscribe(employee => {
      this.employee.push(employee);
    });
}
delete(employee: Employee): void {
  this.employee = this.employee.filter(h => h !== employee);
  this.employeeService.deleteEmployee(employee.id).subscribe();
}
}
