import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss']
})
export class DepartmentDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }

  deptId:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.deptId=params.get('id');
    })
  }

  goToOverView()
  {
    this.router.navigate(['overview'],{relativeTo:this.activatedRoute})
  }
  
  goToContact()
  {
    this.router.navigate(['contact'],{relativeTo:this.activatedRoute})

  }
}
