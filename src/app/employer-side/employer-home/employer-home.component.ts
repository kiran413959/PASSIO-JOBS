import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer-home',
  templateUrl: './employer-home.component.html',
  styleUrls: ['./employer-home.component.css']
})
export class EmployerHomeComponent {

    constructor (private router:Router){}

    ngOnInit(): void {
    const usertype:any= localStorage.getItem('usertype');
        console.log(usertype);
        

    }
      
   
    

}
