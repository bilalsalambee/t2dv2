import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { Index2Component } from './index2/index2.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HowWorksPanelComponent } from './how-works-panel/how-works-panel.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactUs2Component } from './contact-us2/contact-us2.component';
import { ArticleComponent } from './article/article.component';
import { ArticlePageTwoComponent } from './article-page-two/article-page-two.component';
import { ArticlePageThreeComponent } from './article-page-three/article-page-three.component';
import { ArticlePageFourComponent } from './article-page-four/article-page-four.component';
import { ArticleSingleComponent } from './article-single/article-single.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';
import { AuthService } from './auth.service'
import { Tokeninterceptop } from './login/tokeninterceptop'
import { from } from 'rxjs';
import { DoctorDetailFormComponent } from './doctor-detail-form/doctor-detail-form.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { AddSpecialityComponent } from './add-speciality/add-speciality.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    SignupComponent,
    IndexComponent,
    LoginComponent,
    Index2Component,
    AboutComponent,
    FooterComponent,
    HowWorksPanelComponent,
    ContactUsComponent,
    ContactUs2Component,
    ArticleComponent,
    ArticlePageTwoComponent,
    ArticlePageThreeComponent,
    ArticlePageFourComponent,
    ArticleSingleComponent,
    SearchDoctorComponent,
    DoctorDetailFormComponent,
    DoctorProfileComponent,
    AddSpecialityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Tokeninterceptop,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
