import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentContactInfoComponent } from './department-contact-info/department-contact-info.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',component:DepartmentsComponent},
  {path:'employees',component:EmployeeListComponent},
  {path:'departments',component:DepartmentsComponent},
  {
    path:'department/:id',
    component:DepartmentDetailsComponent,
    children:[
      {path:'overview',component:DepartmentOverviewComponent},
      {path:'contact',component:DepartmentContactInfoComponent}
    ]

  },
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
