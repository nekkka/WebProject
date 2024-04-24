import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Emitters } from '../emitters/emitters';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private cookieService: CookieService, private router: Router){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


  ngOnInit(): void {

  }

  submit(): void{
    this.authService.authFunc(this.form).subscribe((result) => {
      Emitters.authEmitter.emit(true);
      console.log(result);
      localStorage.setItem('access_token', result['access_token']);
      this.cookieService.set('access_token', result['access_token']);
      localStorage.setItem('refresh_token', result['refresh_token']);
      this.cookieService.set('refresh_token', result['refresh_token']);

      this.router.navigate(['main']);
    }, (err) => {
      Emitters.authEmitter.emit(false);
    });
  }


}
