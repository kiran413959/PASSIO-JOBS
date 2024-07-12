import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../Service/auth.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  Jobseeker: any;
  Employer: any;

  constructor(
    private forms: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loginForm = this.forms.group({
      Useremail: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitlogin() {
    this.authService.login(this.loginForm.value).subscribe({
      next: (data: any) => {
        localStorage.setItem('token', data.token);
        console.log(data);
        const Token = localStorage.getItem('token')
        console.log(Token);
        
        this.router.navigate([`/home`]);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  choosingUser() {

    Swal.fire({
      title: 'Which one is you?',
      text: 'Choose Your Usertype!',
      icon: 'question',

      showCancelButton: true,
      cancelButtonColor: '#1e3a8a',
      confirmButtonColor: '#1e3a8a',
      confirmButtonText: `<span id="Employee"  class="material-symbols-outlined  tw-relative tw-top-1  ">work</span> Employee`,
      cancelButtonText: `<span id="Employer"  class="material-symbols-outlined  tw-relative tw-top-1 ">apartment</span> Employer`,
      reverseButtons: true,
    }).then((result) => {
      let Usertype: string = ''

      console.log(result);

      if (result.isConfirmed) {
        console.log(result);
        
        try {
          Usertype = 'Jobseeker';

          this.router.navigate([`/signup/${Usertype}`]);
        } catch (error) {
          console.log(error);
        }
      } else if(result.isDismissed && result.dismiss==Swal.DismissReason.cancel) {
        try {
          Usertype = 'Employer';
          this.router.navigate([`/signup/${Usertype}`]);
        } catch (error) {
          console.log(error);
        }
      }else{
        console.log('Invalid Usertype');
        this.router.navigateByUrl("/login")
      }
      console.log(`User:${Usertype}`);


    });
  }
}
