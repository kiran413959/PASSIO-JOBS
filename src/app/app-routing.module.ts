import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResumeSelectionComponent } from './resume-selection/resume-selection.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'signup', component:SignupComponent
  },
  {
    path:'resume_selection', component:ResumeSelectionComponent
  },
  {
    path:'experience', component:ExperiencePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
