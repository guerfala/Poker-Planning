import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  PathOfApi = "http://localhost:8081";

  requestHeader = new HttpHeaders(
    { "No-Auth": "True" }
  );
  constructor(private httpclient: HttpClient) { }

  
  public login(loginData: any) {
    return this.httpclient.post(this.PathOfApi + "/api/auth/authenticate", loginData , { headers: this.requestHeader })
  }

  public  getUserList(): Observable<User[]> {
    return this.httpclient.get<User[]>(this.PathOfApi + "/api/auth/ShowallUsers" ,  { headers: this.requestHeader })
  }
}
