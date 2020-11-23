import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';


export interface ITokenResponse {
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  getdata: any;
  tokenbind: any;
  mytoken: any;
  console: any;

  constructor(private http: HttpClient) { }

  public getProfileData(aa): Observable<any> {

    console.log(aa);
    return this.http.get(`https://api.talk2doctors.com/api/v1/doctor/find/0/query/${aa}`);
  }
  //   public loginAccount(userEmail:string, password:string): Observable<any>{

  //     return this.http.post(`https://api.talk2doctors.com/api/v1/authentication/token${this.password}`)
  // }
  public getDrDetails(): Observable<any> {
    return this.http.get('http://localhost:3000/DrpersonalDetail/');


  }

  public RegisterdUSer(): Observable<any> {
    return this.http.get('http://localhost:3000/RegisterdUSer/');
  }
  public getdatafromapi(): Observable<any> {
    return this.http.get('https://api.talk2doctors.com/api/v1/doctor/find/0/query/s');
  }

  public sendDataFromInput(email: string, password: string): Promise<ITokenResponse> {
    const data = {
      'email': email,
      'password': password
    }
    return this.http
      .post<ITokenResponse>('https://api.talk2doctors.com/api/v1/authentication/token', data)
      .toPromise();

  }
  // public getDataFromDecode(gettokendata): Observable<any> {
  // return this.http.get(`http://api.talk2doctors.com/api/v1/identity/${gettokendata}/profile`)
  // }
  token(token: any) {
    throw new Error('Method not implemented.');
  }

  public authenticUser(id): Observable<any> {
    return this.http.get(`https://api.talk2doctors.com/api/v1/authentication/token`);
  }

  public RegiteredUSer(username, firstname, lastname, pass, email): Observable<any> {
    const request = {
      userName: username,
      Fname: firstname,
      lastName: lastname,
      Pass: pass,
      Email: email,
    }
    return this.http.post(`http://localhost:3000/RegisterdUSer/`, request);
  }



  public RegiteredUSeront2d(firstnames, lastnames, passwords, emails, genders, patients): Observable<any> {
    const request = {
      registrationData: {
        isExternalUser: true,
        identityID: 0,
        genderTypeLookup: 1,
        firstname: firstnames,
        lastname: lastnames,
        email: emails,
        password: passwords,
        city: "MANSEHRA",
        identityTypeLookup: 2,
        defaultProfilePicture: "",
        isActive: true,
        loginProviderName: "",
        providerKey: "",
        dateOfBirth: "2020-10-20T11:45:14.272Z"
        // email: email,
        // firstname: firstname,
        // lastname: lastname,
        // password: pass,
        // genderTypeLookup: gender,
        // identityTypeLookup: patient,
      }
    }
    console.log(request)

    return this.http.post(`https://api.talk2doctors.com/api/v1/identity/register`, request);

  }
  public data = [
    { name: 'john', speciality: 'cardialogist', clinic_city: 'mansehra' },
    { name: 'Ali', speciality: 'skin specialist', clinic_city: 'atd' },
    { name: 'Naveed', speciality: 'urologist', clinic_city: 'harripur' },
    { name: 'Hassan', speciality: 'psychologist', clinic_city: 'lahore' },
    { name: 'adil', speciality: 'gynachologist', clinic_city: 'islambad' },
    { name: 'Waqar', speciality: 'ahfhologiist', clinic_city: 'karachi' }
  ]
  public getUserData() {
    return this.data;
  }


  // public getDataFromDecode(gettokendata): Observable<any> {
  //   const opts = {
  //     headers : new HttpHeaders({
  //       'Requested-with' : 'HttpClient'
  //     })
  //   }
  //   console.log(opts.headers.get('Requested-with'))
  //   return this.http.get(`http://api.talk2doctors.com/api/v1/identity/${gettokendata}/profile`)
  //   }
  public getDataFromDecode(identityid): Observable<any> {
    return this.http.get(`http://api.talk2doctors.com/api/v1/identity/${identityid}/profile`)
  }

  public postUserInfo(firstname, lastname, address1, address2,
    city, state, country, dateOfBirth, email, cnic, phoneNumber, mobileNumber): Observable<any> {

    const request = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      address1: address1,
      address2: address2,
      dateOfBirth: dateOfBirth,
      cnic: cnic,
      phoneNumber: phoneNumber,
      mobileNumber: mobileNumber,
      city: city,
      state: state,
      country: country,
      // profilePicture: profilePicture,

      // licenceNumberOrPMDCNumber: licenceNumberOrPMDCNumber,
      // issuingAuthority: issuingAuthority,
      // affiliatedOrganization: affiliatedOrganization,
      // clinicAddress1: clinicAddress1,
      // clinicAddress2: clinicAddress2,
      // clinicCity: clinicCity,
      // clinicProvince: clinicProvince,
      // clinicPhoneNumber: clinicPhoneNumber,
      // clinicMobileNumber: clinicMobileNumber,
      // clinicStartTime: clinicStartTime,
      // clinicEndTime: clinicEndTime,
      // numberOfPatientsCheckPerDay: numberOfPatientsCheckPerDay,
      // clinicDays: clinicDays,
      // doctorSpecilities: doctorSpecilities,
      // doctorDegrees: doctorDegrees,

    }
    const token = localStorage.getItem('token');
    const helper = new JwtHelperService()
    const decodedToken = helper.decodeToken(token);
    this.mytoken = decodedToken.IdentityDbId
    console.log("my decoded token", this.mytoken)
    // const bindToken = localStorage.getItem('userData')
    // console.log("my binded token", bindToken)


    return this.http.put(`http://api.talk2doctors.com/api/v1/identity/${this.mytoken}/update`, request);

  }
  public submituserdata(degreeName, dregreeYear):Observable<any>{
    const data = {
      name : degreeName,
      year : dregreeYear,
    }
    return this.http.get(`http://api.talk2doctors.com/api/v1/identity/${data}/profile`)

  }
}
