import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AuthService } from '../Service/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupform: any;

  constructor (
              private router:Router,
              private formBuilder:FormBuilder,
              private formgroup:FormGroup,
              private authservice:AuthService,
              private http:HttpClientModule

  
  ) {}
  ngOnInit(): void {
    this.signupform=this.formBuilder.group({
      Username:['',Validators.required],
      Useremail:['',Validators.required],
      mobile:['',Validators.required],
      password:['',Validators.required],
      Confirm_Password:['',Validators.required]
      })
    throw new Error('Method not implemented.');
  }

  submitsignup(){
    this.authservice.signup(this.signupform.value).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/login']);
      },
    (error)=>{
      console.log(error); 
      })

  }
  
  navigateTologin(){
    this.router.navigateByUrl("/login")
  }

}
