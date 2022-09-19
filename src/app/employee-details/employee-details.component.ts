import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private empServeice:EmployeeService) { }
  employees:any=[];
  errorMessage:any;
  
  ngOnInit(): void {
   // this.employees=this.empServeice.getEmployees();
   this.empServeice.getEmployees().subscribe(
    data=>{
      this.employees=data;
    },
    errorData=>{
      this.errorMessage=errorData;
    }
   )
  }

}
