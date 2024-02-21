import { Component } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrl: './vote.component.css'
})
export class VoteComponent {

  votingCards: number[] = [1, 2, 3, 4]; // Example array of voting cards
  votingPhrase: string = 'How long do you estimate this task to take ?'; // Example voting phrase

  selectedCard: number | null = null; // Currently selected card

  selectCard(card: number): void {
    this.selectedCard = this.selectedCard === card ? null : card; // Toggle selection state
  }

  validateVote(): void {
    if (this.selectedCard !== null) {
      console.log('Vote submitted with card:', this.selectedCard);
    } else {
      console.log('Please select a card before validating.');
    }
  }
}
