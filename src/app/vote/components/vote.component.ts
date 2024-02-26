import { Component } from '@angular/core';
import { VoteService } from '../services/vote.service';
import { Router } from '@angular/router';
import { ConfidenceLevel } from '../models/vote.model';
import { MatDialog } from '@angular/material/dialog';
import { ProceedComponent } from '../proceed/proceed.component';


@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent {

  votingCards: number[] = [1, 2, 3, 4]; // Example array of voting cards
  votingPhrase: string = 'How long do you estimate this task to take?'; // Example voting phrase
  selectedCard: number | null = null; // Currently selected card
  confidenceLevels = [
    { label: 'Low', value: ConfidenceLevel.LOW },
    { label: 'Medium', value: ConfidenceLevel.MEDIUM },
    { label: 'High', value: ConfidenceLevel.HIGH }
  ];

  selectedConfidenceLevel: ConfidenceLevel = ConfidenceLevel.MEDIUM; 

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private voteService: VoteService
  ) { }

  selectCard(card: number): void {
    this.selectedCard = this.selectedCard === card ? null : card; // Toggle selection state
  }

  validateVote(): void {
    if (this.selectedCard !== null && this.selectedConfidenceLevel !== null) {
      // Open a confirmation dialog
      const dialogRef = this.dialog.open(ProceedComponent, {
        width: '250px',
        data: 'Are you sure you want to submit your vote?'
      });
  
      // After the dialog is closed
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // If the user confirms, proceed with vote submission
          if (this.selectedCard !== null && this.selectedConfidenceLevel !== null) {
            this.voteService.createVote(this.selectedCard, this.selectedConfidenceLevel).subscribe(
              () => {
                console.log('Vote created successfully');
                this.router.navigate(['/']); // Navigate after successful vote creation
              },
              (error) => {
                console.error('Failed to create vote:', error);
              }
            );
          } else {
            console.warn('Invalid selection: Card or confidence level is null');
          }
        } else {
          // If the user cancels, do nothing
          console.log('Vote submission canceled');
        }
      });
    } else {
      console.warn('Please select a card and confidence level before validating.');
    }
  }
  
  
}
