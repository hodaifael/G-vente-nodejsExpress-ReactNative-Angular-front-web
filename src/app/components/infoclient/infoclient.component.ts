import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Infoclient } from 'src/app/infoclient';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-infoclient',
  templateUrl: './infoclient.component.html',
  styleUrls: ['./infoclient.component.css']
})
export class InfoclientComponent implements OnInit {
  info = new Infoclient();
  loginid: any;
  cart: Product[] = [];
  cart1: any;
  message: any = "";
  data: any;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  insertcommande() {
    this.loginid = localStorage.getItem("loginid");
    this.cart1 = localStorage.getItem("cart");
    this.cart = JSON.parse(this.cart1);
    let t = 0;
    for (var val of this.cart) {
      let coin = val.prix / 10;
      t += coin;
    }

    let cmd = [this.info, this.cart, t, this.loginid];

    this.dataService.insertcommande(cmd).subscribe(res => {
      this.message = "product inserted";
      this.router.navigate(['../payement']);
    });

  }

}
