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

export class AddressDetails{
  constructor(public stateCode : string,
        public stateName : string,
        public statePinCode : number){

  }
}