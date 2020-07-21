import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth/auth.service'
import { UserI } from '../../../shared/models/user.interface';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {
  constructor(private authSvc: AuthService) {}

  ngOnInit() {
    const user: UserI = {
      email: 'wellinmart32@gmail.com',
      password: '123'
    };
    this.authSvc.loginByEmail(user);
  }
}