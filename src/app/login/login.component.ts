import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AuthService } from '../Service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm!:FormGroup;

  constructor (
                private forms: FormBuilder,
                private router:Router,
                private authService: AuthService,
                private http: HttpClient){}

  ngOnInit(): void {
   this.loginForm=this.forms.group({

    Useremail:['',Validators.required],
    password:['',Validators.required]

   })
  }


  submitlogin(){
    this.authService.login(this.loginForm.value).subscribe({
      next: (data:any)=>{
        localStorage.setItem('token',data.token)
        console.log(data);
        
        this.router.navigate(['/home']);
        },
        error: (error)=>{
          console.log(error);
          }
    }
    )
  }

  
  navigateTosignup(){
    this.router.navigateByUrl("/signup")
  }

}
