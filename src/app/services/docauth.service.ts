
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {
  private loggedIn = false;
  constructor(private route:Router,private toast:HotToastService) { }
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
    this.toast.success("Successfully Logged Out");
    localStorage.removeItem("LoggedInDoctor");
    this.route.navigate(["/doctor/doclogin"]);
  }

}
