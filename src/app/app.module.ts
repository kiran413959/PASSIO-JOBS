import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxExtendedPdfViewerModule, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';

import { HomePageComponent} from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ResumeSelectionComponent } from './resume-selection/resume-selection.component';
import { SiderComponent } from './sider/sider.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { QAndAPageComponent } from './q-and-a-page/q-and-a-page.component';
import { CommonModule } from '@angular/common';
import { ApplicationReviewComponent } from './application-review/application-review.component';
import { HeaderComponent } from './shared/componets/header/header.component';
import { InboxComponent } from './inbox/inbox.component';
import { MessageComponent } from './inbox/message/message.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { EmployerHomeComponent } from './employer-side/employer-home/employer-home.component';






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
    ApplicationReviewComponent,
    InboxComponent,
    MessageComponent,
    NotificationsComponent,
    ProfileComponent,
    EmployerHomeComponent,
    
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    SharedModule,
    NgxExtendedPdfViewerModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    [SweetAlert2Module.forRoot()],
    FontAwesomeModule,
  ],
  providers: [SharedModule,HeaderComponent,SiderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
