import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../Models/room/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseURL="http://localhost:8082/pokerplanning/"

  constructor(private httpClient: HttpClient) { }

  getRoomList(): Observable<Room[]>{
    return this.httpClient.get<Room[]>(`${this.baseURL+"ShowAllRooms"}`);
  }
}
