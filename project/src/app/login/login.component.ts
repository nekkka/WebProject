import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Emitters } from '../emitters/emitters';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup = this.formBuilder.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private cookieService: CookieService, private router: Router){

  }


  submit(): void{
    this.authService.authFunc(this.form).subscribe((result) => {
      Emitters.authEmitter.emit(true);
      console.log(result);
      localStorage.setItem('jwt', result['jwt']);
      this.cookieService.set( 'jwt', result['jwt']);

      this.router.navigate(['main']);
    }, (err) => {
      Emitters.authEmitter.emit(false);
    });
  }


}
