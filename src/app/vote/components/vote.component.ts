import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoteService } from '../services/vote.service';
import { ConfidenceLevel } from '../models/vote.model';
import { MatDialog } from '@angular/material/dialog';
import { ProceedComponent } from '../proceed/proceed.component';
import { Task } from '../models/vote.model';
import { User } from '../../user/Models/user';
import { UserService } from '../../user/Services/user.service';

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
  user: User = new User();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private voteService: VoteService,
    private userServ: UserService
  ) { }
  
  ngOnInit(): void {
    const userData = this.userServ.getUserData();
    if (userData) {
      this.user = userData;
      console.log('Retrieved user ID:', this.user.userId);
    }
  
    
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
            // Get the taskId of the current task
            const taskId = this.tasks[this.currentTaskIndex].taskId; 
            // Call your vote service with the selected card, confidence level, and task ID
            this.voteService.createVote( this.user.userId,this.selectedCard, this.selectedConfidenceLevel, taskId).subscribe(
              () => {
                console.log('Vote created successfully');
                this.moveToNextTask();
              },
              (error) => {
                console.error('Failed to create vote:', error);
              }
            );
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
      // Navigate to the result route
      this.router.navigate(['/vresult']);
    }
  }
}
