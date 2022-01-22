import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';
import { NotificationService } from "@progress/kendo-angular-notification";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  products: Product[] = [];
  productscart: Product[] = [];
  prod = new Product();
  newallproducts: Product[] = [];
  cart: Product[] = [];
  allProducts: any;
  search: string = '';
  path: any;
  loginid: any;
  cart1: any;
  filter: any = 'all';
  private hideAfter = 3000;

  constructor(private dataService: DataService, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  searchByname() { // with type info
    if (this.search != "") {
      this.products = this.newallproducts.filter(res => {
        return res.marque.match(this.search);
      });
    } else if (this.search == "") {
      this.products = this.newallproducts;
    }

  }
  changefilter(filter: any) {
    this.filter = filter;
    this.getProducts();
  }

  getProducts() {
    this.loginid = localStorage.getItem("loginid");
    this.dataService.getstock(this.filter).subscribe(res => {
      this.allProducts = res;
      this.newallproducts = this.allProducts;
      if (this.search != "") {
        this.products = this.newallproducts.filter(res => {
          return res.description.match(this.search);
        });
      } else if (this.search == "") {
        this.products = this.newallproducts;
      }
    });
  }
  addtocart(id: any) {

    this.productscart = this.newallproducts.filter(
      res => res.id === id);
    if (localStorage.getItem("cart") === null) {
      this.cart.push(this.productscart[0]);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    } else {
      this.cart1 = localStorage.getItem("cart");
      this.cart = JSON.parse(this.cart1);
      if (this.cart.filter(res => res.id === id).length == 0) {
        this.cart.push(this.productscart[0]);
        localStorage.setItem("cart", JSON.stringify(this.cart));
      }
    }
    this.notificationService.show({
      content: "new product add to cart",
      cssClass: "button-notification",
      animation: { type: "slide", duration: 400 },
      position: { horizontal: "right", vertical: "top" },
      type: { style: "success", icon: true },
      hideAfter: this.hideAfter,
    });
  }

}
