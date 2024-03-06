import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Card} from "./card";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private baseUrl = "http://localhost:8081/pokerplanning/";

  constructor(private httpClient: HttpClient) {}

  getCardList(): Observable<Card[]>{
    return this.httpClient.get<Card[]>(`${this.baseUrl+'cards'}`);

  }
  createCard(card: Card,id: bigint): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl+'addCards'}/${id}`,card);
  }

  deleteCard(id: bigint): Observable<string>{
    return this.httpClient.delete<string>(`${this.baseUrl+'cards'}/${id}`);
  }

  getCardById(id: number): Observable<Card>{
    return this.httpClient.get<Card>(`${this.baseUrl+'cards'}/${id}`);
  }

  findcardofpack(id: number): Observable<Card[]>{
    return this.httpClient.get<Card[]>(`${this.baseUrl+'cardsofpack'}/${id}`);
  }

  updatecard(id: number, employee: Card): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl+'updateCard'}/${id}`, employee);
  }
}
