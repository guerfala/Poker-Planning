import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../Models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseURL="http://localhost:8082/pokerplanning/"

  constructor(private httpClient: HttpClient) { }

  getRoomList(): Observable<Room[]>{
    return this.httpClient.get<Room[]>(`${this.baseURL+"ShowAllRooms"}`);
  }

  createRoom(room: Room):Observable<Object>{
    return this.httpClient.post(`${this.baseURL+"AddRoom"}`, room);
  }

  getRoomById(id: number): Observable<Room>{
    return this.httpClient.get<Room>(`${this.baseURL+"GetRoomById"}/${id}`);
  }

  updateRoom(id: number, room: Room): Observable<Object>{
    return this.httpClient.put(`${this.baseURL +"UpdateRoom"}/${id}`, room);
  }

  deleteRoom(id: number): Observable<Object>{
    return this.httpClient.delete( `${this.baseURL + "DeleteRoom"}/${id}` );
  }
  
}
