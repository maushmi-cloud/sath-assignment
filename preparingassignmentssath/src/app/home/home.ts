export class covidEssentials{
    constructor(
        public firstName: string,
        public lastName: string,
        public emailId: string,
        public contactNumber: string,
        public dob : string,
        public gender : string
      ) {  }  
      

}
//Address Details after clicking Next button

export class AddressDetails{
  constructor(public stateCode : string,
        public stateName : string,
        public statePinCode : number){

  }

  
}
//MobileNumberValidation
export class MobileNumberValidation{
  public mobileNo : string;
  constructor(){
    
  }
}
