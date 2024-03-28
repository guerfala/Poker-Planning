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
  public UpdateUser(userId: number, user: User, file: File | null): Observable<object> {
    const formData: FormData = new FormData();
  
    // Append user properties individually
  
    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('gender', user.gender);
    formData.append('role', user.role);
    formData.append('skillRate', user.skillRate.toString());
  
    if (file) {
      formData.append('file', file, file.name);
    }
  
    return this.httpclient.put(this.PathOfApi + `/api/auth/UpdateUser/${userId}`, formData, { headers: this.requestHeader });
  }
  
  

getUserById(userId: number): Observable<User>{
  return this.httpclient.get<User>(this.PathOfApi + `/api/auth/GetUserById/${userId}`, { headers: this.requestHeader } );
}



public getUserImage(userId: number) : any 
{
   return this.httpclient.get(this.PathOfApi + `/api/auth/image/${userId}` , { headers: this.requestHeader });
}



public getUserData(): any {
  const userData = localStorage.getItem('userData');
  return userData ? JSON.parse(userData) : null;
}
}
