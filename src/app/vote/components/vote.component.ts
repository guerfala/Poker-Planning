import { Component } from '@angular/core';
import { VoteService } from '../services/vote.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent {

  votingCards: number[] = [1, 2, 3, 4]; // Example array of voting cards
  votingPhrase: string = 'How long do you estimate this task to take ?'; // Example voting phrase
  selectedCard: number | null = null; // Currently selected card
  confidenceLevels: string[] = ['Low', 'Medium', 'High'];
  confidenceLevelIndices: number[] = Array.from({ length: this.confidenceLevels.length }, (_, i) => i);


  constructor(
    private router: Router,
    private voteService: VoteService
    ) { }

  selectCard(card: number): void {
    this.selectedCard = this.selectedCard === card ? null : card; // Toggle selection state
  }

  validateVote(): void {
    if (this.selectedCard !== null) {
      this.voteService.createVote(this.selectedCard).subscribe(
        () => {
          console.log('Vote created successfully');
          this.router.navigate(['/votes']);
        },
        (error) => {
          console.error('Failed to create vote:', error);
        }
      );
    } else {
      console.warn('Please select a card before validating.');
    }
  }
}
