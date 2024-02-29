import { Component, OnInit } from '@angular/core';
import { VoteService } from '../services/vote.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  taskName: string = ''; // Initialize task name
  userVoteResults: any[] = []; // Array to hold user vote results
  currentTaskId: number = 2; // Initialize current task ID
  minTaskId: number = 2; // Minimum task ID
  maxTaskId: number = 4; // Maximum task ID
  averageCardValue: number = 0; // Initialize average card value
  shouldDiscussTask: boolean = false; // Flag to indicate if the task should be discussed

  constructor(private voteService: VoteService) { }

  ngOnInit(): void {
    // Fetch vote results for the current task from the service
    this.loadVotesForTask(this.currentTaskId);
  }

  goToNextTask(): void {
    // Increment the current task ID by 1
    this.currentTaskId++;

    // Check if the current task ID exceeds the maximum value
    if (this.currentTaskId > this.maxTaskId) {
      this.currentTaskId = this.maxTaskId; // Set it to the maximum value
    }

    // Load votes for the next task
    this.loadVotesForTask(this.currentTaskId);
  }

  goToPreviousTask(): void {
    // Decrement the current task ID by 1
    this.currentTaskId--;

    // Check if the current task ID goes below the minimum value
    if (this.currentTaskId < this.minTaskId) {
      this.currentTaskId = this.minTaskId; // Set it to the minimum value
    }

    // Load votes for the previous task
    this.loadVotesForTask(this.currentTaskId);
  }

  // Method to load votes for a specific task
  loadVotesForTask(taskId: number): void {
    // Fetch vote results for the specific task from the service
    this.voteService.getVotesForTask(taskId).subscribe(votes => {
      // Map each vote to extract necessary information
      this.userVoteResults = votes.map(vote => ({
        userId: vote.userId,
        cardValue: vote.cardValue,
        confidenceLevel: vote.confidenceLevel,
        voteTimestamp: vote.voteTimestamp,
        taskId: vote.taskId
      }));

      // Calculate the average card value for the current task
      const totalCardValue = this.userVoteResults.reduce((acc, vote) => acc + vote.cardValue, 0);
      const numUsers = this.userVoteResults.length;
      this.averageCardValue = numUsers > 0 ? totalCardValue / numUsers : 0;

      // Check if the task should be discussed
      this.shouldDiscussTask = this.checkTaskForDiscussion(this.userVoteResults);
    });

    // Fetch the task name from the service
    this.voteService.getTaskById(taskId).subscribe(task => {
      if (task) {
        this.taskName = task.taskName;
      } else {
        console.log('No task found with ID: ', taskId);
      }
    });
  }

  // Method to check if the task should be discussed
  checkTaskForDiscussion(userVotes: any[]): boolean {
    for (let i = 0; i < userVotes.length - 1; i++) {
      for (let j = i + 1; j < userVotes.length; j++) {
        const diff = Math.abs(userVotes[i].cardValue - userVotes[j].cardValue);
        if (diff > 2) {
          return true;
        }
      }
    }
    return false;
  }
}
