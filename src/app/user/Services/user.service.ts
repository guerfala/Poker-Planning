import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer, throwError } from 'rxjs';
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
    return this.httpclient.get<User[]>(this.PathOfApi + "/api/auth/ShowallUsers" )
  }

  public DeleteProfil(userId: number): Observable<object> {
    return this.httpclient.delete(this.PathOfApi + `/api/auth/DeleteUser/${userId}` , { headers: this.requestHeader });
  }
  
  public UpdateUser(userId:number, user:User):  Observable<object> {
   
    return this.httpclient.put(this.PathOfApi + `/api/auth/UpdateUser/${userId}`,user , { headers: this.requestHeader } );
  }

  getUserById(userId: number): Observable<User>{
    return this.httpclient.get<User>(this.PathOfApi + `/api/auth/GetUserById/${userId}`, { headers: this.requestHeader } );
  }
  public getUserData(): any {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  }

}
