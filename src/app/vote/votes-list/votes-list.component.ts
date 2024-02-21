import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Vote } from '../models/vote.model';
import { VoteService } from '../services/vote.service';

@Component({
  selector: 'app-votes-list',
  templateUrl: './votes-list.component.html',
  styleUrls: ['./votes-list.component.css']
})
export class VotesListComponent implements OnInit {
  dataSource: MatTableDataSource<Vote> = new MatTableDataSource<Vote>([]); // Data source for the table
  displayedColumns: string[] = ['voteId', 'cardValue','voteTimestamp', 'delete']; // Displayed columns

  constructor(private voteService: VoteService) { }

  ngOnInit(): void {
    this.getVotes();
  }

  getVotes(): void {
    this.voteService.getAllVotes().subscribe(votes => {
      this.dataSource = new MatTableDataSource<Vote>(votes); // Set up data source
    });
  }
  
  deleteVote(voteId: number): void {
    this.voteService.deleteVote(voteId).subscribe(
      () => {
        console.log('Vote deleted successfully');
        // Optionally, refresh the list of votes after deletion
        this.getVotes();
      },
      (error) => {
        console.error('Failed to delete vote:', error);
    });
  }
}
