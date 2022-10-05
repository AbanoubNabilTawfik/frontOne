import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  constructor(private router:Router) { }
  departments=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"HTML5"},
    {"id":3,"name":"Bootstrap"},
    {"id":4,"name":"JavaScript"}

  ]

  ngOnInit(): void {
  }

  goToDepartment(id:any)
  {
    //got to department list page
    this.router.navigate(["/department",id]);
  }

}
