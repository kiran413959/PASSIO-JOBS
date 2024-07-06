import { Component, ViewChild } from '@angular/core';
// import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Router } from '@angular/router';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor (private router : Router){}

  navigateTologin(){
    this.router.navigate(['/login']);
  }


  
  }


