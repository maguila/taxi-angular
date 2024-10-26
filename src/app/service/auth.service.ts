import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticated = signal(false)

  constructor(private http:HttpClient) { }

  login(username: string, password: string) : Observable<any>{    
    let url = environment.API_URL + '/precios'
    this.authenticated.set(true)
    return this.http.get(url)
  }

  isAuthenticated() {
    return this.authenticated()
  }

  public getPrecios(){

  }
}
