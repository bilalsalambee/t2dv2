import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ApiDataService } from '../api-data.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public doctorDetail: any;
  public DrpersonalDetail: any;

  constructor(private _service: ApiDataService) {

  }

  // public clickme() {
  //   this._callser.getProfileData().subscribe(
  //     getdata => {
  //       console.log(getdata);
  //       this.data = getdata;
  //     }
  //   )
  // }

  ngOnInit(): void {
    this._service.getDrDetails().subscribe(
      getDoctorDetail => {
        this.DrpersonalDetail = getDoctorDetail;
        console.log('through Http Request Dr Details are', this.DrpersonalDetail);
      }
    );
  }
  public searchDoc(searchvalue) {
    this._service.getProfileData(searchvalue).subscribe(
      getdata => {
        this.doctorDetail = getdata;
        console.log('api Data', getdata)
      }, (error) => {
        console.log('Error is ', error);
      }
    );
  }


}

