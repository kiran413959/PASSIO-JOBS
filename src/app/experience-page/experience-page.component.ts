import { Component } from '@angular/core';
import { PageViewModeType, ScrollModeType,pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.css']
})
export class ExperiencePageComponent {

  

  constructor (private router:Router){}
  
  navigateTohome(){
    this.router.navigateByUrl('')

  }
  navigateToresumeSelection(){
    this.router.navigateByUrl("/resume_selection")

  }




}
