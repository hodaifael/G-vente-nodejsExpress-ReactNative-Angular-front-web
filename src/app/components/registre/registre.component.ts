import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
  user = new User();
  message = "";
  u: any;
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

  }

  auth() {
    this.user.type = "user";
    this.dataService.insertUser(this.user).subscribe(res => {
      if (res != null) {
        this.router.navigate(['../login']);
      } else {
        this.message = "numero or password incorrecte";
      }
    });
  }
}
