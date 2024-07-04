import { Component, OnInit } from '@angular/core';
import { PageViewModeType, ScrollModeType,pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { Router } from '@angular/router';




@Component({
  selector: 'app-resume-selection',
  templateUrl: './resume-selection.component.html',
  styleUrls: ['./resume-selection.component.css'],
  
  

})
export class ResumeSelectionComponent {



  public minZoom = 0.33;
  public maxZoom = 40;

  public showBorders = false;

  public scrollMode = ScrollModeType.horizontal;

  public pageViewMode: PageViewModeType = 'single';


  public page = 0;

  public pageLabel!: string;



  constructor (private router:Router){}
  
  navigateTohome(){
    this.router.navigateByUrl('')
  }














  
}
