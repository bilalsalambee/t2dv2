import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
fname: string;
lastname: any;
email: any;
  userProfiledata: any;
  constructor() { }

  ngOnInit(): void {
          // return JSON.parse(localStorage.getItem("userData"))

    const getUserDetail =  JSON.parse(localStorage.getItem('userData'))
    this.userProfiledata = getUserDetail
    console.log("jkahskjdha", this.userProfiledata);
    // this.fname = getUserDetail.lastname;
    // console.log("firts name", this.fname)
    // this.lastname = getUserDetail.lastname;
    // this.email = getUserDetail.email;

  }

}
