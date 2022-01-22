import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user = new User();
  message = "";
  u: any;
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

  }

  auth() {

    this.dataService.auth(this.user).subscribe(res => {
      if (res != null) {
        this.u = res;
        localStorage.setItem('type', this.u[0]["type"]);
        localStorage.setItem('loginid', this.u[0]["id"]);
        localStorage.setItem('login', this.u[0]["username"]);
        localStorage.setItem('password', this.u[0]["password"]);

        this.router.navigate(['../addproduct']);
      } else {
        this.message = "numero or password incorrecte";
      }
    });
  }
}
