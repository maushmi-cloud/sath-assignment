import { Component, OnInit } from '@angular/core';
import { covidEssentials, MobileNumberValidation } from './home';
import {AddressDetails } from './home';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  genderOption =['Male','Female','Transgender'];

  date = new Date();
  dateControlFormat = new Date('yyyy-dd-mm');

  //Mobile Number Validation
  mobileNo = new MobileNumberValidation();
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  //Email Id validation
  emailIdPattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$";

  essentials = new covidEssentials('',
    '',
    '',
    '',
    '',
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
      this.addressDetail = new AddressDetails(this.stateCodeValue[0],this.stateNameValue[0],842004);
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
