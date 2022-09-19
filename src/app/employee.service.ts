import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IEmployee } from './IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  employees=[];

  url:string="/assets/Data/employes.json";

  getEmployees():Observable<IEmployee[]>
  {
   //return this.employees;
   return this.http.get<IEmployee[]>(this.url).pipe(catchError((err)=>{
    return throwError(()=>err.message||"Internal server")
   }));
  }
}
