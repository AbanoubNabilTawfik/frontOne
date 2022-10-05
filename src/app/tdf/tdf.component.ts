import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {

  constructor() { }

  userModel:User= new User('','','')
  date= new Date();

  ngOnInit(): void {
  }

}
