import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart: Product[] = [];
  cart1: any;
  path: any;
  total: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getProducts();
  }



  getProducts() {
    this.cart1 = localStorage.getItem("cart");
    this.cart = JSON.parse(this.cart1);
    this.gettotal();

  }
  deleteProduct(emp: any) {
    this.cart1 = localStorage.getItem("cart");
    this.cart = JSON.parse(this.cart1);
    const index: number = this.cart.indexOf(emp);
    this.cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(this.cart));
    this.gettotal();
  }

  gettotal() {
    let t = 0;
    for (var val of this.cart) {
      t += val.prix;
    }
    this.total = t;
  }


}
