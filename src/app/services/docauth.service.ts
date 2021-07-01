
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {
  private loggedIn = false;
  constructor(private route:Router) { }
  sendToken(token: string) {
    localStorage.setItem("LoggedInDoctor", token)
  }
  getToken() {
    return localStorage.getItem("LoggedInDoctor")
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("LoggedInDoctor");
    this.route.navigate(["/doctor"]);
  }

}
