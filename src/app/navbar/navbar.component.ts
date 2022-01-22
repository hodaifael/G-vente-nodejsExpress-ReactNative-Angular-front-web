import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  checktype() {
    return localStorage.getItem('type') == "admin" && this.checklogin();
  }
  checklogin() {
    if (localStorage.getItem("login") === null) {
      return false;
    }
    return true;
  }
  logout() {
    localStorage.removeItem('login');
    localStorage.removeItem('password');
    localStorage.removeItem('loginid');
    localStorage.removeItem('type');
    this.router.navigate(['/login']);
  }

}
