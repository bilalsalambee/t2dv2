import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { from } from 'rxjs';
import { ApiDataService } from './api-data.service';
import { Tokeninterceptop } from './login/tokeninterceptop'
import { AuthService } from './auth.service'
import { FormGroup } from '@angular/forms'
// import { LoginComponent } from './login/login.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'talk2doctor';
  getdata: any;
  isUserNotExist: boolean;
  incorrrectPassword: boolean;
  inputdata: any
  ffff: any
  gd:false
  ff: boolean;
  user: any;
  incorrrectEmail: boolean;
  public logout: true;
  logoutfun: boolean;
  buttonhide: boolean;
  response: any;
  loginDataBindig: any;
  fff: boolean;
  usernamehasvalid: boolean;
  tokenisvalid: boolean;
  tken : boolean
  constructor(public authenticService: AuthService) {

  }
  ngOnInit(): void {
    // public userNameDisplay(){
      const token = localStorage.getItem('token')
      this.tken = true;
      const username = this.authenticService.getUserName()
      this.ffff = username
      console.log("displaying nameeeee", username)
    this.usernamehasvalid = true
    // }

    $(document).ready(function () {
      $("#flip").click(function () {
        $("#panel").slideToggle("slow");
      });
    });

  }

// public userNameDisplay(){
//   const username = this.authenticService.getUserName()
//   this.ffff = username
//   console.log("displaying nameeeee", username)
// this.usernamehasvalid = false
// }

  public clickMe(){
    this.authenticService.decodeToken()
    response => {this.response = response
      console.log("this.reponse on click me",response)

    }
  }



  public loginFun(userEmail, userPassword){
    $(document).ready(function () {
      $("#polo").click(function () {
        $("#panel").slideUp();
      })});

const inputdata = this.getdata.find( user => user.Email === userEmail)
console.log(inputdata)
this.ffff = inputdata
this.ff= true
if (this.ff == true){
  localStorage.setItem('Email', inputdata.Email)
  localStorage.setItem('password', inputdata.Pass)

}

if (inputdata === null || inputdata === undefined) {
  this.isUserNotExist = true;
      alert('incorrect Email')

  return;
}

if (inputdata.Email !== userEmail) {
  this.incorrrectEmail = true;
  alert('incorrect password')

  return;
}

if (inputdata.Pass !== userPassword) {
  this.incorrrectPassword = true;
  alert('incorrect password')

  return;
}

}
public deleteData(){
  localStorage.removeItem('Email')
  localStorage.removeItem('password')
  this.ffff = true;
  this.ff = null;
  this.buttonhide = false
  this.logoutfun = false
   this.tokenisvalid = this.ffff
   this.tokenisvalid = true
  // $(document).ready(function () {
  //  {
  //     $("#buttonhide").hide();
  //   }})

}
// public(){
//     this.loginDataBindig = this.Logindata.loginfromapi
//   response =>{
//     this.response = response
//     console.log( "my response",response)

//   }
// }

}
