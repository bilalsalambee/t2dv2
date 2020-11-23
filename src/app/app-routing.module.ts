import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { IndexComponent } from './index/index.component'
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
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';
import { DoctorDetailFormComponent } from './doctor-detail-form/doctor-detail-form.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { AddSpecialityComponent } from './add-speciality/add-speciality.component';

const routes: Routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'index2', component: Index2Component },
  { path: 'footer', component: FooterComponent },
  { path: 'how-works-panel', component: HowWorksPanelComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'contact-us2', component: ContactUs2Component },
  { path: 'article', component: ArticleComponent },
  { path: 'article-page-two', component: ArticlePageTwoComponent },
  { path: 'article-page-three', component: ArticlePageThreeComponent },
  { path: 'article-page-four', component: ArticlePageFourComponent },
  { path: 'article-single', component: ArticleSingleComponent },
  { path: 'search-doctor', component: SearchDoctorComponent },
  { path: "doctor-detail-form", component: DoctorDetailFormComponent },
  { path: "doctor-profile", component: DoctorProfileComponent },
  { path: "add-speciality", component: AddSpecialityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const
  RoutingComponent = [
  ]
