import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, catchError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: any
  user: any
  
  url = "api/users"

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) { }

  registerUser(user: any): Observable<any> {
    let headers = new HttpHeaders()
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.url}/register`, user, {headers})
  }

  authenticateUser(user: any): Observable<any> {
    let headers = new HttpHeaders()
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.url}/authenticate`, user, {headers})
  }

  storeUserData(token: string, user: any) {
    localStorage.setItem('id_token', token)
    localStorage.setItem('user', JSON.stringify(user))
    this.authToken = token
    this.user = user
  }

  loadToken () {
    const token = localStorage.getItem("id_token")
    this.authToken = token
  }

  // returns true if user IS logged in.
  loggedIn() {
    const token = localStorage.getItem("id_token") || undefined

    if (!this.jwtHelper.isTokenExpired(token)) {
      this.loadToken()
      return true
    }
    return false
  }
  
  logout() {
    this.authToken = null
    this.user = null
    localStorage.clear()
  }
}
