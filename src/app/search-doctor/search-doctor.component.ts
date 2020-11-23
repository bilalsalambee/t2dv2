import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})
export class SearchDoctorComponent implements OnInit {
  public DrpersonalDetail: any;
  public clicnicdays: any;
  public drData:any;
  getAllUserDetail: any;
  getfirstname: any;
  constructor(private _service: ApiDataService, private authservice: AuthService ) { }

  ngOnInit(): void {
    const getAllUserDetail = this.authservice.getUserDetail()
    console.log("userdetail in oninit", getAllUserDetail.firstname)
    this.getfirstname = getAllUserDetail.firstname + getAllUserDetail.lastname

    // this._service.getDrDetails().subscribe(
    //   getDoctorDetail => {
    //     this.DrpersonalDetail = getDoctorDetail;
    //     this.clicnicdays = this.DrpersonalDetail[0].clicnicday;
    //     console.log('through Http Request Dr Details are', this.DrpersonalDetail);
    //   }
    // );
  }
//   public viewProfile() {
// this._service.getUserData()
//   }
}




