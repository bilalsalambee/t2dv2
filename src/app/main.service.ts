import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class MainService {



  constructor(private http:HttpClient) { }

public getProfileData(): Observable<any> {
  var dd='a';
    console.log(dd);
    return this.http.get(`https://api.talk2doctors.com/api/v1/doctor/find/0/query/${dd}`);
  }
public data = [
   {name:'john', speciality: 'cardialogist', clinic_city: 'mansehra' },
   {name:'Ali', speciality: 'skin specialist', clinic_city: 'atd' },
   {name:'Naveed', speciality: 'urologist', clinic_city: 'harripur' },
   {name:'Hassan', speciality: 'psychologist', clinic_city: 'lahore' },
   {name:'adil', speciality: 'gynachologist', clinic_city: 'islambad' },
   {name:'Waqar', speciality: 'ahfhologiist', clinic_city: 'karachi' }
 ]
 public getUserData(){
   return this.data;
 }
}
