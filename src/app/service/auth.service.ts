import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticated = signal(false)

  constructor() { }

  login(username: string, password: string){
    this.authenticated.set(true)
  }

  isAuthenticated() {
    return this.authenticated()
  }

  public getPrecios(){

  }
}
