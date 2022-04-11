import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import * as crypto from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    localStorage.clear();
  }

  onLogin(form: any): void {
    var pass = crypto.MD5(form.value.password).toString();
    var array: any = {
      email: form.value.email,
      password: pass
    }
    this.authService.login(array);
  }

}
