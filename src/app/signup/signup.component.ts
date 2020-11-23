import { Component, OnInit } from '@angular/core';
import {ApiDataService} from '../api-data.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  viewUser: any;

  constructor(private _service: ApiDataService) { }
  public UsersDatass = [
    { userName: 'Naveed', firstName: 'Naveed', lastName: 'Ahmed', Pass: '123', Email: 'naveed@gmial.com', Type: 0, },
  ];
  ngOnInit(): void {
  }
  // this form is storing data in json server
  public signUp(username, firstname, lastname, pass, email) {
    this._service.RegiteredUSer(username, firstname, lastname, pass, email).subscribe(
      registerNewUser => {
        this.UsersDatass = registerNewUser;
        console.log('through Http Request New User are Details are', this.UsersDatass);
      }
    );
  }




  // this form is submitting data in the original api talk2doctor
public signupfromt2d( firstnames, lastnames, passwords, emails, genders, patients) {
  console.log(firstnames, lastnames, passwords, emails, genders, patients)
  this._service.RegiteredUSeront2d( firstnames, lastnames, passwords, emails, genders, patients).subscribe(
    viewRegisterUser => {
      this.viewUser = viewRegisterUser
      console.log("my user", this.viewUser )
      alert("USER register successfully")
    }
  )

}

}
