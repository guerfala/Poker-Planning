import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) {}
  ngOnInit(): void {
   
  }

  login( loginForm:NgForm)
  { this.userService.login(loginForm.value).subscribe(
    (Response) => {
      console.log(Response);
    },
    (error) => {
      console.log(error);
    }
    );
  }

}