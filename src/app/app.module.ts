import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { RightNavComponent } from './right-nav/right-nav.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { SquarePipe } from './square.pipe';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import {HttpClientModule} from '@angular/common/http';
import { DepartmentsComponent } from './departments/departments.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactInfoComponent } from './department-contact-info/department-contact-info.component';
import { TdfComponent } from './tdf/tdf.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LeftNavComponent,
    RightNavComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    StructuralDirectivesComponent,
    PipesComponent,
    SquarePipe,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    ParentComponent,
    ChildComponent,
    DepartmentsComponent,
    PageNotFoundComponent,
    DepartmentDetailsComponent,
    DepartmentOverviewComponent,
    DepartmentContactInfoComponent,
    TdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
