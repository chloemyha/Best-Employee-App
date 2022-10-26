import { Employee } from './employee';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

export const EMPLOYEES: Employee[] = [
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
