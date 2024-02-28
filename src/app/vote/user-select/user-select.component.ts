import { Component } from '@angular/core';
import { VoteService } from '../services/vote.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-select',
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.css']
})
export class VoteCompletedComponent {
  selectedUser: number | null = null; // Initially set to null

  constructor(
    private voteService: VoteService,
    private router: Router
  ) { }

  selectUser(user: number): void {
    this.selectedUser = user;
    this.voteService.setSelectedUserId(user); // Set the selected user ID in the service
    this.router.navigate(['/vote', this.selectedUser]);
  }

  isUserCompleted(user: number): boolean {
    return this.voteService.isVoteCompleted(user);
  }
}
