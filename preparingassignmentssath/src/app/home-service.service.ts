import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  essentials =[{id:1111,name:"maushmi",email:"aaa.com",contactNo:7063685445}]
  constructor() { }
  public createEssentials(essentials:{id,name,email,contactNo}){
    this.essentials.push(essentials);
  }
}
