import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-q-and-a-page',
  templateUrl: './q-and-a-page.component.html',
  styleUrls: ['./q-and-a-page.component.css']
})
export class QAndAPageComponent {
educationList= [
  {education:'none'},
  {education:'high school'},
  {education:'Diploma'},
  {education:'college'},
  {education:'masters'},
  {education:'phd'},
  {education:'doctorate'},
  {education:'other'},


]


  constructor (private router:Router){}
  
  navigateTohome(){
    this.router.navigateByUrl('')

  }
  navigateToresumeSelection(){
    this.router.navigateByUrl("/experience")

  }

}
