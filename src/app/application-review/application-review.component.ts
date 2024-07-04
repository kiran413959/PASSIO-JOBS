import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-review',
  templateUrl: './application-review.component.html',
  styleUrls: ['./application-review.component.css']
})
export class ApplicationReviewComponent {

  constructor (private router:Router){}
  
  navigateTohome(){
    this.router.navigateByUrl('')

  }
  navigateToresumeSelection(){
    this.router.navigateByUrl("/experience")

  }


}
