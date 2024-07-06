import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../Service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthService],
 
})
export class SignupComponent implements OnInit {

  signupform!: FormGroup;
  inputData:any=[]
  UserType : string | null = null;


  constructor (
              private router:Router,
              private activatedRoute: ActivatedRoute,
              private formBuilder:FormBuilder,
              private formgroup:FormGroup,
              private authservice:AuthService,
              private http:HttpClientModule,
  ) {}


  
  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe({
      next: (params) => {
        this.UserType = params.get('User');
        console.log('Usertype:', this.UserType);
      }
     
    })

    if(this.UserType == 'Jobseeker'){
      
      let Data=[
        
        {for:'name',label:'Name',type:'text',id:'name', name:'Username',formControlName:'Username',require:true },

        {for:'email',label:'Email',type:'email',id:'email', name:'Useremail',formControlName:'Useremail',require:true },

        {for:'mobile',label:'Mobile Number',type:'tel',id:'mobile', name:'mobile',formControlName:'mobile',require:true },

        {for:'password',label:'Password',type:'password',id:'password', name:'password',formControlName:'password',require:true },

        {for:'confirm_password',label:'Confirm Password',type:'password',id:'confirm_password', name:'Confirm_Password',formControlName:'Confirm_Password',require:true }
      
      ]
      console.log('Jobseeker');

      this.inputData= Data


      this.signupform=this.formBuilder.group({
        Username:['',Validators.required],
        Useremail:['',Validators.required],
        mobile:['',Validators.required],
        password:['',Validators.required],
        Confirm_Password:['',Validators.required]
        })



    }else if(this.UserType === 'Employer'){ 
      console.log('Employer');

       const Data = [
        
        {for:'Company_name',label:'Company Name',type:'text',id:'Company_name', name:'Username',formControlName:'Username', require:true },

        {for:'email',label:'Company Email',type:'email',id:'Company_email', name:'Useremail',formControlName:'Useremail',require:true },

        {for:'mobile',label:'Mobile Number',type:'tel',id:'mobile', name:'mobile',formControlName:'mobile',require:true },

        {for:'location',label:'Location',type:'text',id:'location', name:'location',formControlName:'location',require:true },

        {for:'password',label:'Password',type:'password',id:'password', name:'password',formControlName:'password',require:true },

        {for:'confirm_password',label:'Confirm Password',type:'password',id:'confirm_password', name:'Confirm_Password',formControlName:'Confirm_Password',require:true }

        
      ]

      this.inputData= Data


      this.signupform=this.formBuilder.group({
        Username:['',Validators.required],
        Useremail:['',Validators.required],
        mobile:['',Validators.required],
        location:['',Validators.required],
        password:['',Validators.required],
        Confirm_Password:['',Validators.required]
        })





    }else{
      console.log('Invalid Usertype');
      this.router.navigateByUrl("/login")
    }


   
   
  }

  submitsignup(){
    this.authservice.signup(this.signupform.value).subscribe({
      next:(data)=>{
      console.log(data);
      this.router.navigate(['/login']);
      },
    error:(error)=>{
      console.log(error); 
      }
})
  }
  
  navigateTologin(){
    this.router.navigateByUrl("/login")
  }

}
