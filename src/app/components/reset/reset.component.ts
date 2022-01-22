import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  user = new User();

  confirmpassword: any;
  message = "";
  message2 = "";
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

  }
  checkpassword(x: any) {
    this.confirmpassword = x.target.value;
    console.log(this.confirmpassword);
    if (this.user.password == this.confirmpassword) {
      this.message2 = "ok";
    } else {
      this.message2 = "password not confirmed";
    }
  }

  updatepass() {

    this.dataService.updatepass(this.user).subscribe(res => {
      if (res != null) {
        this.router.navigate(['../login']);
      } else {
        this.message = "email not found";
      }
    });
  }
}
