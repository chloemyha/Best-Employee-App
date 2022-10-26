import { Component, OnInit, PipeTransform } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEES } from '../mock-employees';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employee: Employee ={
    id:1,
    name :"Bob Smith",
    role : "Product Manager",
    startdate: "Jun 15,2015"
  
  };
  employees = EMPLOYEES;
  constructor() { }

  ngOnInit(): void {
  }
 

}
