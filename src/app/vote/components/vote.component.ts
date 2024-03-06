import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoteService } from '../services/vote.service';
import { ConfidenceLevel } from '../models/vote.model';
import { MatDialog } from '@angular/material/dialog';
import { ProceedComponent } from '../proceed/proceed.component';
import { Task } from '../models/vote.model';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  
  tasks: Task[] = []; // Update the type of the tasks array
  currentTaskIndex: number = 0;
  
  votingCards: number[] = [1, 2, 3, 4, 5]; // Example array of voting cards
  votingPhrase: string = 'How long do you estimate this task to take?'; // Example voting phrase
  selectedCard: number | null = null; // Currently selected card
  confidenceLevels = [
    { label: 'Low', value: ConfidenceLevel.LOW },
    { label: 'Medium', value: ConfidenceLevel.MEDIUM },
    { label: 'High', value: ConfidenceLevel.HIGH }
  ];

  selectedConfidenceLevel: ConfidenceLevel | null = null; // Initially set to null

  selectedUser: number | null = null; // Initially set to null

  isUserSelected: boolean = false; // Variable to track if a user is selected

  completedUsers: number[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private voteService: VoteService
  ) { }
  
  ngOnInit(): void {
    // Retrieve the selected user ID from the route parameters
    this.route.params.subscribe(params => {
      const userId = params['userId'];
      if (userId) {
        this.selectedUser = Number(userId);
        this.isUserSelected = true;
      }
    });
    
    this.voteService.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  selectCard(card: number): void {
    this.selectedCard = this.selectedCard === card ? null : card; // Toggle selection state
  }

  selectConfidenceLevel(level: ConfidenceLevel): void {
    this.selectedConfidenceLevel = level;
  }

  validateVote(): void {
    if (this.selectedCard !== null && this.selectedConfidenceLevel !== null) {
      const dialogRef = this.dialog.open(ProceedComponent, {
        width: '250px',
        data: 'Are you sure you want to submit your vote?',
        panelClass: 'proceed-dialog'
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          if (this.selectedCard !== null && this.selectedConfidenceLevel !== null) {
            if (this.selectedUser !== null) { // Check if selectedUser is not null
              const taskId = this.tasks[this.currentTaskIndex].taskId; // Get the taskId of the current task
              this.voteService.createVote(this.selectedCard, this.selectedConfidenceLevel, taskId).subscribe(
                () => {
                  console.log('Vote created successfully');
                  this.voteService.markVoteCompleted(this.selectedUser); // Mark vote as completed
                  this.moveToNextTask();
                },
                (error) => {
                  console.error('Failed to create vote:', error);
                }
              );
            } else {
              console.warn('Selected user is null');
            }
          } else {
            console.warn('Invalid selection: Card or confidence level is null');
          }
        } else {
          console.log('Vote submission canceled');
        }
      });
    } else {
      console.warn('Please select a card and confidence level before validating.');
    }
  }
  
  moveToNextTask(): void {
    if (this.currentTaskIndex < this.tasks.length - 1) {
      this.currentTaskIndex++;
      this.selectedCard = null;
      this.selectedConfidenceLevel = null;
    } else {
      // Check if all users have completed voting
      const allUsersCompleted = this.voteService.allUsersCompleted();
      if (allUsersCompleted) {
        // Navigate to the result route
        this.router.navigate(['/vresult']);
      } else {
        // If not all users have completed voting, navigate back to the user selection page
        this.router.navigate(['/vuser']);
      }
    }
  }
}
