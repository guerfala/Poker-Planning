import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user/Services/user-auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit{

  constructor(public  userAuthService: UserAuthService , private router :Router)
  {

  }
  ngOnInit(): void {
    
  }
  public isLoggedIn()
  {
    return this.userAuthService.isLoggedIn();
  }
  public logout()
  {
 localStorage.removeItem('jwtToken');
 localStorage.removeItem('userData');
 this.router.navigate(['/login']);
  }
  
  redirectToRooms(): void {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const role = JSON.parse(userData)?.role;
      if (role === 'ScrumMaster') {
        this.router.navigate(['/rooms']);
      } else if (role === 'Developpeur') {
        this.router.navigate(['/roomsdev']);
      } else {
        // Handle other roles or no role found
      }
    } else {
      // Handle case when user data is not found
    }
  }


  

}
