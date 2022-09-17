import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  constructor() { }
  displayName:boolean=false;
  isLoggedIn:boolean=true;
  car:string="SPORTAGE";

  colors=["red","blue","green","orange","yellow"]

  ngOnInit(): void {
  }

}
