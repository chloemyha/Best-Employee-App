import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [
      { id: 12, name: 'Dr. Nice', role: 'Data Analyst', startdate: 'July 17,2014' },
      { id: 13, name: 'Bombasto', role: 'Data Entry', startdate: 'June 13,2013' },
      {
        id: 14,
        name: 'Celeritas',
        role: 'Frontend Developer',
        startdate: 'May 25,2012',
      },
      {
        id: 15,
        name: 'Magneta',
        role: 'System Engineer',
        startdate: 'April 13,2016',
      },
      { id: 16, name: 'RubberMan', role: 'HR', startdate: 'July 18,2019' },
      { id: 17, name: 'Dynama', role: 'Recruiter', startdate: 'January 21,2021' },
      {
        id: 18,
        name: 'Dr. IQ',
        role: 'Customer Success',
        startdate: 'February 13,2020',
      },
      {
        id: 19,
        name: 'Magma',
        role: 'Customer Service',
        startdate: 'March 25,2012',
      },
      { id: 20, name: 'Tornado', role: 'Tech Lead', startdate: 'May 16,2010' },
    ];
    return { employees };
  }
  // Overrides the genId method to ensure that a employee always has an id.
  // If the employees array is empty,
  // the method below returns the initial number (11).
  // if the employees array is not empty, the method below returns the highest
  // employee id + 1.
  genId(employees: Employee[]): number {
    return employees.length > 0 ? Math.max(...employees.map(employee => employee.id)) + 1 : 11;
  }


  constructor() {}
}
