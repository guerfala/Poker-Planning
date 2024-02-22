import { Injectable } from '@angular/core'; //affectation CRUD
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pack} from "./pack";

@Injectable({
  providedIn: 'root'
})
export class PackService {
  private baseUrl = "http://localhost:8081/pokerplanning/";


  constructor(private httpClient: HttpClient) { }

  getPackList(): Observable<Pack[]>{
    return this.httpClient.get<Pack[]>(`${this.baseUrl+'Pack'}`);

  }
  createPack(pack: Pack): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl+'addPack'}`,pack);
  }

  deletePack(id: bigint): Observable<string>{
    return this.httpClient.delete<string>(`${this.baseUrl+'Pack'}/${id}`);
  }

  getpackById(id: number): Observable<Pack>{
    return this.httpClient.get<Pack>(`${this.baseUrl+'Packid'}/${id}`);
  }

  updatepack(id: number, employee: Pack): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl+'updatePack'}/${id}`, employee);
  }
}
