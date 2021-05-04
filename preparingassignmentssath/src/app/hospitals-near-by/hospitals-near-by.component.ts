import { Component, OnInit } from '@angular/core';
import { HospitalAvail} from './hospitalnearby';
@Component({
  selector: 'app-hospitals-near-by',
  templateUrl: './hospitals-near-by.component.html',
  styleUrls: ['./hospitals-near-by.component.css']
})
export class HospitalsNearByComponent implements OnInit {

  hospitalnearby : HospitalAvail={
    name : "KKMCH",
    state : "BIHAR",
    district : "MUZAFFARPUR",
    bedavailable : 13
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
