import { Component } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  showResults: boolean = false;

  revealResults(): void {
    // Call a method to fetch and set the voting results
    // For example:
    // this.fetchVotingResults();
    // Then set showResults to true
    this.showResults = true;
  }
}


