import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResumeSelectionComponent } from './resume-selection/resume-selection.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { QAndAPageComponent } from './q-and-a-page/q-and-a-page.component';
import { ApplicationReviewComponent } from './application-review/application-review.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path:'', component:HomePageComponent,

    children:[
      {
        path:'home', component:HomePageComponent
      },
      {
        path:'content',component:ContentComponent
      }
      
    ]
    
  },

  {
    path:'login', component:LoginComponent
  },
  {
    path:'signup/:Usertype', component:SignupComponent
  },
  {
    path:'resume_selection', component:ResumeSelectionComponent
  },
  {
    path:'experience', component:ExperiencePageComponent
  },
  {
    path:'QandA', component:QAndAPageComponent
  },
  {
    path:'application_review', component:ApplicationReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
