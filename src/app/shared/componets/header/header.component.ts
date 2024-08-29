import { Component, Renderer2, ViewChild ,OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
[x: string]: any;
    
    employee={id:'employee',title1:'Jobs',title2:'Companies'}
    employer={id:'employer',title1:'Jobs',title2:'Candidates'}
    usertype = localStorage.getItem('usertype')


    isLoggedIn: boolean = false;
    Employer: any;
    Jobseeker:any;
 
    constructor (private router : Router){}

    ngOnInit() {
      const token = localStorage.getItem('token');
      this.isLoggedIn = token !== null;
      const usertype = localStorage.getItem('usertype');
      
    }
     
        navigateTologin(){
          this.router.navigate(['/login']);
        }

        navigateToNotification(){
          this.router.navigate(['/notification'])
        }


        navigateToInbox(){
          this.router.navigate(['/inbox'])
        }

        navigateToProfile(){
          this.router.navigate(['/profile'])
        }

        navigateToHome(){
            this.router.navigate(['/home'])
        }

      }
    