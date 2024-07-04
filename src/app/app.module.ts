import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxExtendedPdfViewerModule, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import {MatProgressBarModule} from '@angular/material/progress-bar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';

import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ResumeSelectionComponent } from './resume-selection/resume-selection.component';
import { SiderComponent } from './sider/sider.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { QAndAPageComponent } from './q-and-a-page/q-and-a-page.component';





@NgModule({
  declarations: [
    


    AppComponent,
    ContentComponent,
    ResumeSelectionComponent,
    HomePageComponent,
    LoginComponent,
    SiderComponent,
    SignupComponent,
    ExperiencePageComponent,
    QAndAPageComponent,
    
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    SharedModule,
    NgxExtendedPdfViewerModule,
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
