import { Component, Renderer2, ViewChild ,OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit,AfterViewInit {
    isLoggedIn: boolean = false;
    Token:any=localStorage.getItem('token')
    loginbutton : HTMLElement | undefined;
    profile_pic : HTMLElement | undefined;
  
    constructor (
        private router : Router,
       
    )
          {   
                //checking token is getting or not
                
                //if token is not available then show login button and hide profile pic
                
              }
              ngOnInit() {
                const loginButton = document.getElementById('loginbutton');
                if (loginButton) {
                  this.loginbutton = loginButton;
                }
                
                const profilePic = document.getElementById('profile-pic');
                if (profilePic) {
                  this.profile_pic = profilePic;
                }
              }
              ngAfterViewInit(){
                this.profileview();
                
  }
  

    
    checkToken() {
      //If the token not equal to null changing isLoggedin true
        if(this.Token !== null) {   
            this.isLoggedIn = true;
        }
  }
  
 
    profileview(){
        //If user is logged in then hide login button and show profile pic, else hide profile pic and show login button
        if(this.isLoggedIn==true){
          if (this.profile_pic) {
            this.profile_pic.style.display= 'block';
          }
        }else{
          if (this.loginbutton) {
            this.loginbutton.style.display='block';
          }
          
        }
      }
        
        
        
        
        
        navigateTologin(){
          this.router.navigate(['/login']);
        }
      }