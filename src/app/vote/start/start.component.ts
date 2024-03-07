import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../user/Models/user'; // Import your User model
import { UserService } from '../../user/Services/user.service'; // Import your UserService

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'] // Note: Use styleUrls instead of styleUrl
})
export class StartComponent {

  user: User = new User(); // Assuming your User model has properties like userId

  constructor(private userServ: UserService, private router: Router) { }

  ngOnInit(): void {
    const userData = this.userServ.getUserData();
    if (userData) {
      this.user = userData;
      console.log('Retrieved user ID:', this.user.userId);
    }
  }

  startVote(): void {
    const taskId = 1;
    if (this.user.userId) { // Check if user ID is available
      // Navigate to the voting component with the user ID as a route parameter
      this.router.navigate(['/vote',taskId]);
    } else {
      console.error('User ID is not available.');
      // Handle the case where user ID is not available
    }
  }
}
