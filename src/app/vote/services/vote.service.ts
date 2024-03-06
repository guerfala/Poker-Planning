// vote.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vote } from '../models/vote.model';
import { ConfidenceLevel } from '../models/vote.model';
import { Task } from '../models/vote.model';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  private baseUrl = 'http://localhost:8081/vote'; // Base URL of your Spring Boot API
  private baseUrlTasks = 'http://localhost:8081/tasks';
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
    const totalUsers = 3; 
    for (let i = 1; i <= totalUsers; i++) {
      if (!this.isVoteCompleted(i)) {
        return false; 
      }
    }
    return true; 
  }

  
  createVote(cardValue: number, confidenceLevel: ConfidenceLevel, taskId: number): Observable<any> {
    if (!this.selectedUserId) {
        throw new Error('No user ID selected');
    }
    const url = `${this.baseUrl}/add/${this.selectedUserId}/${taskId}`;
    return this.http.post<any>(url, { cardValue, confidenceLevel });
}

  
  getAllVotes(): Observable<Vote[]> {
    return this.http.get<Vote[]>(`${this.baseUrl}/all`);
  }
  
  deleteVote(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrlTasks}/getAllTasks`);
  }
  
  getTaskById(taskId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrlTasks}/${taskId}`);
  }

  getVotesForTask(taskId: number): Observable<Vote[]> {
    const url = `${this.baseUrl}/task/${taskId}/votes`;
    return this.http.get<Vote[]>(url);
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
