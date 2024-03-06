import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { UserAuthService } from '../Services/user-auth.service';
import { Router } from '@angular/router';
import { User } from '../Models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService , private userAuthService:UserAuthService , private router : Router) {}
  ngOnInit(): void {
   
  }

  login( loginForm:NgForm)
  { this.userService.login(loginForm.value).subscribe(
    (Response:any) => {
      const token = Response.token;
      const userData = Response.user;

      this.userAuthService.setTokenAndUser(token,userData);
      this.router.navigate(['/userDetails']);
   
      
    },
    (error) => {
      console.log(error);
    }
    );
  }

}