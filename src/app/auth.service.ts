import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { Tokeninterceptop } from './login/tokeninterceptop'
import { JwtModule } from "@auth0/angular-jwt";
import { JwtHelperService } from "@auth0/angular-jwt";
import { ApiDataService } from './api-data.service'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor {
  token: string;
  tokenn: string;
  decodedToken: any
  getuserValue: any;
  identityid: any;
  returnvalue: any;

  constructor(public _service: ApiDataService) { }
  intercept(req, next) {
    let tokenizeReq = req.clone({
      setHeader: {
        authorization: 'Beared xx.yy.zz'
      }
    })
    return next.handle(tokenizeReq)
  }
//decode the token and get value
  public decodeToken() {
    this.token = localStorage.getItem('token');
    const helper = new JwtHelperService()
    const decodedToken = helper.decodeToken(this.token);
    console.log("my decoded token", decodedToken)
    // this.getuserValue = this.decodedToken.IdentityDbId
    console.log("current user identity is", decodedToken.IdentityDbId)
    this.identityid = decodedToken.IdentityDbId
console.log("ajksdkasdh",this.identityid)


this._service.getDataFromDecode(this.identityid).subscribe(
  returnValue => {
   this.returnvalue = returnValue;
   console.log("tokenvalueaftersubmit", returnValue)
   localStorage.setItem('userData', JSON.stringify(returnValue.profileData))

 })
    }
    public getUserName(){
      return localStorage.getItem('userDetail')
    }

    public getUserDetail(){
      return JSON.parse(localStorage.getItem("userData"))
    }


//get user on token base
  // public getUser(){

  // }
}
