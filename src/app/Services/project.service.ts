import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../Models/project';
import { Observable } from 'rxjs';
import { Team } from '../Models/team';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseURL="http://localhost:8082/api/" ;

  constructor(private httpClient: HttpClient) { }

  getProjectList(): Observable<Project[]>{
    return this.httpClient.get<Project[]>(`${this.baseURL+"Projects"}`);
  }

  createProject(project: Project):Observable<Object>{
    
    return this.httpClient.post(`${this.baseURL+"addProject"}`, project);
  }

  getProjectById(id: number): Observable<Project>{
    return this.httpClient.get<Project>(`${this.baseURL+"Project"}/${id}`);
  }

  updateProject(id: number, project: Project): Observable<Object>{
    return this.httpClient.post(`${this.baseURL +"updateProject"}/${id}`, project);
  }

  deleteProject(id: number): Observable<Object>{
    return this.httpClient.delete( `${this.baseURL + "deleteProject"}/${id}` );
  }

  getAllTeams(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseURL+"Teams"}`);
  }

  
  getTeamById(id: number): Observable<Team>{
    return this.httpClient.get<Team>(`${this.baseURL+"Team"}/${id}`);
  }
}
