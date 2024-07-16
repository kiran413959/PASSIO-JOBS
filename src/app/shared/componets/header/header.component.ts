import { Component, Renderer2, ViewChild ,OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    isLoggedIn: boolean = false;
 
    constructor (private router : Router){}

    ngOnInit() {
      const token = localStorage.getItem('token');
      this.isLoggedIn = token !== null;
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

      }
    