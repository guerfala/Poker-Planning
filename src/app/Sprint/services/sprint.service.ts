import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sprint } from '../models/sprint';

@Injectable({
  providedIn: 'root'
})
export class SprintService {

  private baseURL="http://localhost:8082/pokerplanning/sprints/"
  
  constructor(private httpClient: HttpClient) { }

  getSprintList(): Observable<Sprint[]>{
    return this.httpClient.get<Sprint[]>(`${this.baseURL+"getAllSprints"}`);
  }

  addSprint(sprint: Sprint):Observable<Object>{
    return this.httpClient.post(`${this.baseURL+"addSprint"}`, sprint);
  }
  getSprintById(id: number): Observable<Sprint>{
    return this.httpClient.get<Sprint>(`${this.baseURL+"GetSprintById"}/${id}`);
  }

  updateSprint(id: number, sprint: Sprint): Observable<Object>{
    return this.httpClient.put(`${this.baseURL +"updateSprint"}/${id}`, sprint);
  }

  deleteSprint(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL+"deleteSprint"}/${id}` );
  }
  
}
