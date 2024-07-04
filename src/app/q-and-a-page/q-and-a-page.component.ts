import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-q-and-a-page',
  templateUrl: './q-and-a-page.component.html',
  styleUrls: ['./q-and-a-page.component.css']
})
export class QAndAPageComponent {


  constructor (private router:Router){}
  
  navigateTohome(){
    this.router.navigateByUrl('')

  }
  navigateToresumeSelection(){
    this.router.navigateByUrl("/experience")

  }

}
