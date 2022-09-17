import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  employees=[
    {"id":1 , "name":"Ahmed Mohamed"},
    {"id":2,"name":"Hany Ahmed"},
    {"id":3 ,"name":"Sara Mostafa"},
    {"id":4,"name":"Salama Mohamed"}
  ]

  getEmployees()
  {
   return this.employees;
  }
}
