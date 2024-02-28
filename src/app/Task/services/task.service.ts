import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseURL="http://localhost:8082/pokerplanning/tasks/"

  constructor(private httpClient: HttpClient) { }

  getTaskList(): Observable<Task[]>{
    return this.httpClient.get<Task[]>(`${this.baseURL+"getAllTasks"}`);
  }


  getTaskById(id: number): Observable<Task>{
    return this.httpClient.get<Task>(`${this.baseURL+"GetTaskById"}/${id}`);
  }

  updateTask(id: number, task: Task): Observable<Object>{
    return this.httpClient.put(`${this.baseURL +"updateTask"}/${id}`, task);
  }

  deleteTask(id: number): Observable<Object>{
    return this.httpClient.delete( `${this.baseURL + "deleteTask"}/${id}` );
  }
  
}
