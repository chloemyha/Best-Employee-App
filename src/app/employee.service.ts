import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployees(): Observable<Employee[]> {
    const employees = of(EMPLOYEES);
    this.messageService.add('EmployeeService: fetched employees');
    return employees;
  }
  constructor(private messageService: MessageService) { }
}
