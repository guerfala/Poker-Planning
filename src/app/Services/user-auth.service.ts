import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }
  public setToken(jwtToken:string)
  {
    localStorage.setItem('jwtToken',jwtToken);
  }

  public  getToken(): string { 
    return localStorage.getItem('jwtToken') || '';
  }

  public clear() 
  {
    localStorage.clear;
  }

  public isLoggedIn()
  {
  return this.getToken();
  }
}
