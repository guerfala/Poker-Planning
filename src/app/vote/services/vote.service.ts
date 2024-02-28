// vote.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vote } from '../models/vote.model';
import { ConfidenceLevel } from '../models/vote.model';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  private baseUrl = 'http://localhost:8082/pokerplanning/vote'; // Base URL of your Spring Boot API
  private selectedUserId: number | null = null;
  private completedUsers: Set<number> = new Set<number>();

  constructor(private http: HttpClient) { }

  
  setSelectedUserId(userId: number): void {
    this.selectedUserId = userId;
  }

  getSelectedUserId(): number | null {
    return this.selectedUserId;
  }

  markVoteCompleted(userId: number | null): void {
    if (userId !== null) {
      this.completedUsers.add(userId);
    }
  }

  isVoteCompleted(userId: number): boolean {
    return this.completedUsers.has(userId);
  }

  allUsersCompleted(): boolean {
    // Retrieve the total number of users
    const totalUsers = 3; // Assuming you have 3 users, adjust this based on your actual number of users
  
    // Check if all users have completed voting
    for (let i = 1; i <= totalUsers; i++) {
      if (!this.isVoteCompleted(i)) {
        return false; // Return false if any user has not completed voting
      }
    }
    return true; // Return true if all users have completed voting
  }

  // Modify createVote to accept cardValue and confidenceLevel parameters
  createVote(cardValue: number, confidenceLevel: ConfidenceLevel): Observable<any> {
    if (!this.selectedUserId) {
      throw new Error('No user ID selected');
    }
    const url = `${this.baseUrl}/add/${this.selectedUserId}`;
    return this.http.post<any>(url, { cardValue, confidenceLevel });
  }
  
  getAllVotes(): Observable<Vote[]> {
    return this.http.get<Vote[]>(`${this.baseUrl}/all`);
  }
  
  deleteVote(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  // addVote(vote: Vote): Observable<Vote> {
  //   return this.http.post<Vote>(`${this.baseUrl}/add`, vote);
  // }

  // updateVote(vote: Vote): Observable<Vote> {
  //   return this.http.put<Vote>(`${this.baseUrl}/update`, vote);
  // }


  // getVoteById(id: number): Observable<Vote> {
  //   return this.http.get<Vote>(`${this.baseUrl}/${id}`);
  // }

}
