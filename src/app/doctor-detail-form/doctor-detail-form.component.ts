import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ApiDataService } from '../api-data.service'

@Component({
  selector: 'app-doctor-detail-form',
  templateUrl: './doctor-detail-form.component.html',
  styleUrls: ['./doctor-detail-form.component.css']
})
export class DoctorDetailFormComponent implements OnInit {
  returnData: any;

  constructor(private apipostdata: ApiDataService ) { }

  ngOnInit(): void {

  }

  public doctorDetail(firstname, lastname, address1, address2,
    city, state, country, dateOfBirth, email, cnic, phoneNumber, mobileNumber){
this.apipostdata.postUserInfo(firstname, lastname, address1, address2,
  city, state, country, dateOfBirth, email, cnic, phoneNumber, mobileNumber).subscribe(
returnData =>{
  this.returnData = returnData
  console.log("doctor submit data", returnData)
}

)
    }

}
