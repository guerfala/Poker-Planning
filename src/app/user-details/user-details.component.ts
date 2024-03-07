import { Component } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../Services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { UserAuthService } from '../Services/user-auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class UserDetailsComponent {

  user: User = new User();

  constructor(private userServ: UserService, private router: Router, private authserv: UserAuthService) { }

  ngOnInit(): void {
    const userData = this.authserv.getUserData();
    if (userData) {
      const userId = userData.userId;
      this.userServ.getUserById(userId).subscribe((user) => {
        this.user = user;
      });
    }
  }





  deleteUser(id: number) {
    this.userServ.DeleteProfil(id).subscribe(() => {
      // Refresh the user list after deletion
      
      // Navigate after user is deleted and list is refreshed
      window.location.reload();
    });
  }
  
  
  
    editUser(id: number) {
      this.router.navigate(['/updateUser', id]);
    

    }


}