import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import * as jwt_decode from 'jwt-decode';
import { JwtModule } from "@auth0/angular-jwt";
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthService } from '../auth.service'
import { AppComponent } from '../app.component'
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public Userdetails: any;

  public id = 0;
  public inputdata: any
  public logindata: any;
  public isUserNotExist = false;
  public incorrrectPassword = false;
  arrivedata: any;
  getdata: any
  decoded: any
  tokenData: any;
  public gettokendata: any
  returnvalue: any;
  constructor(private _service: ApiDataService, public userIdentity: AuthService, public AppComponent: AppComponent) { }

  ngOnInit(): void {

    this.populateUserData()
    this.newpopulateservice()
  }
  //   public loginFun(userEmail:string, password:string){
  //     this._service.loginAccount(userEmail, password).subscribe(
  //       getdata =>{
  //         this.getdata = getdata
  // console.log("this is login data", getdata)
  //       }
  //     )
  //   }
  public newpopulateservice() {
    this._service.authenticUser(1).subscribe(
      arrivedata => {
        this.arrivedata = arrivedata
      }
    )
  }
  public clickmethod(inputemail: any, password: any) {
    const checkdata = this.arrivedata.findfunction(jsonuser => jsonuser === inputemail)
    console.log(checkdata)
  }
  checkdata(checkdata: any) {
    throw new Error('Method not implemented.');
  }

  public populateUserData(): void {
    this._service.RegisterdUSer()
      .subscribe(
        logindata => {
          this.logindata = logindata
          console.log(this.logindata)
        })
  }

  public testemail(userEmail, password) {
    const userData = this.logindata.find(user => user.Email === userEmail);
    console.log(userData);
    localStorage.setItem('key', `$userdata`)

    if (userData === null || userData === undefined) {
      this.isUserNotExist = true;
      alert('incorrect Email')

      return;
    }

    if (userData.Pass !== password) {
      this.incorrrectPassword = true;
      alert('incorrect password')

      return;
    }
    alert('Login successfully')
  }

  public login(name: string, pass: string) {
    this.id = this.id + 1;
    console.log('Id is ', this.id);
    this._service.authenticUser(this.id).subscribe(
      getuserAuthenticDetail => {
        this.Userdetails = getuserAuthenticDetail;
        console.log('through Http Request Dr Details are', this.Userdetails);
      }
    );

    this.Userdetails.forEach(element => {
      if (element.name === name && element.pass === pass) {
        if (element.type === 0) {
          console.log('Public User logged in')
        }
        else if (element.type === 1) {
          console.log('Patient logged in')
        }
        else {
          console.log('Doctor logged in')
        }
      }
      else {

      }
    });

  }

  public loginuserfromapi() {
    this._service.getdatafromapi().subscribe(
      getdata => {
        this.getdata = getdata
        console.log('my data', getdata)
      }
    )
  }



  public loginfromapi(email, password) {
    this._service.sendDataFromInput(email, password)

      .then(response => {
        const getvalue = response.token
        console.log('value are', getvalue)
        localStorage.setItem('token', getvalue)

        this.userIdentity.decodeToken()
        const ali = this.userIdentity.getUserName()
        console.log("ali", ali)

        this.AppComponent.ngOnInit()
        const helper = new JwtHelperService()
        const decodedToken = helper.decodeToken(getvalue);
        const expirationDate = helper.getTokenExpirationDate(getvalue);
        const isExpired = helper.isTokenExpired(getvalue);
        this.gettokendata = decodedToken.IdentityDbId
        console.log("expiration date", expirationDate)
        console.log("token expired", isExpired)
        console.log("decoded token", decodedToken)
        console.log("data for showin name", decodedToken)

        localStorage.setItem('decodedtoken', decodedToken)
        if (email === null || password === null) {
          alert("invalid email or password")
        }
        if (email === decodedToken.Email) {
          alert("user loggedin, welcome user")

        }
        this._service.getDataFromDecode(this.gettokendata).subscribe(
          returnValue => {
            this.returnvalue = returnValue;
            console.log("token_value_after_submit", returnValue.profileData)
            localStorage.setItem('userDetail', returnValue.profileData.firstname)

          }
        )
        // this._service.getDataFromDecode().subscribe(
        //   returnValue =>{
        //     this.returnvalue = returnValue;
        //     console.log("token value after submit", returnValue)
        //     // localStorage.setItem('userDetail', returnValue)

        //   }
        // )
      }

      )
  }
  // getToken() {
  //   this._service.getDataFromDecode(this.gettokendata).subscribe(
  //     returnValue =>{
  //       this.returnvalue = returnValue;
  //       console.log("token value after submitttttttttttttttt  ", returnValue)
  //     }
  //   )
  // }



}
