import { Component } from '@angular/core';
import { VoteService } from '../services/vote.service';
import { Router } from '@angular/router';
import { ConfidenceLevel } from '../models/vote.model';

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
    private voteService: VoteService
  ) { }

  selectCard(card: number): void {
    this.selectedCard = this.selectedCard === card ? null : card; // Toggle selection state
  }

  validateVote(): void {
    if (this.selectedCard !== null) {
      this.voteService.createVote(this.selectedCard, this.selectedConfidenceLevel).subscribe(
        () => {
          console.log('Vote created successfully');
          this.router.navigate(['/votes']);
        },
        (error) => {
          console.error('Failed to create vote:', error);
        }
      );
    } else {
      console.warn('Please select a card and confidence level before validating.');
    }
  }
}
