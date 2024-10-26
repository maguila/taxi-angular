import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticated = signal(false)

  constructor(private http:HttpClient) { 
    
  }

  login(username: string, password: string) : Observable<any>{    
    let url = environment.API_URL + '/login'
    this.authenticated.set(true)
    return this.http.post(url, {username:username, password:password})
  }

  isAuthenticated() {
    return this.authenticated()
  }

  public getPrecios(){

  }
}
