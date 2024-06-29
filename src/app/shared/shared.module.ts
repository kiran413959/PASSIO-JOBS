import { NgModule } from "@angular/core";
import { HeaderComponent } from "./componets/header/header.component";
// import { HomePageComponent } from "../home-page/home-page.component";
// import { SignupComponent } from "../signup/signup.component";
// import { LoginComponent } from "../login/login.component";
// import { ResumeSelectionComponent } from "../resume-selection/resume-selection.component";
// import { ExperiencePageComponent } from "../experience-page/experience-page.component";





@NgModule({
    declarations: [
        HeaderComponent,
        // HomePageComponent,
        // SignupComponent,
        // LoginComponent,
        // ResumeSelectionComponent,
        // ExperiencePageComponent

        ],
        exports:[
            HeaderComponent,
            // HomePageComponent,
            // SignupComponent,
            // LoginComponent,
            // ResumeSelectionComponent,
            // ExperiencePageComponent
            
        ]
})

export class SharedModule{
    
}