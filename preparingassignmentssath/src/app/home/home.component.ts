import { Component, OnInit } from '@angular/core';
import { covidEssentials } from './home';
import {AddressDetails } from './home'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  genderOption =['Male','Female','Transgender'];

  date = new Date();
  dateControlFormat = new Date('yyyy-dd-mm');
  essentials = new covidEssentials('Maushmi',
    'Parmar',
    'aaa.@.acom',
    '7535678882',
    '20/12/1995',
    this.genderOption[0]);

    stateCodeValue = ['Select','BH','MH','WB'];
    stateNameValue = ['Bihar','Delhi','West Bengal'];
    addressDetail = new AddressDetails(this.stateCodeValue[0],this.stateNameValue[0],842006);

    submitted = false;
    flagnext = false;
    flagstateCode =false;
    
    onSubmit() { this.submitted = true; }

    funNext(){
      this.flagnext = true;
    }
    selectStateCode(){
      this.flagstateCode = true;
    }

    newEssentialsNeeder() {
      this.essentials = new covidEssentials('',
    '',
    '',
    '',
    '',
    this.genderOption[0]);
    }

  constructor() { }

  ngOnInit(): void {
  }

}
