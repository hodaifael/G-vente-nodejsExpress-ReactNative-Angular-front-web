import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';
import { NotificationService } from "@progress/kendo-angular-notification";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  productID: any;
  products: any;
  prod = new Product();
  message = "";
  cart: Product[] = [];
  cart1: any;
  private hideAfter = 3000;

  constructor(private dataService: DataService, private route: ActivatedRoute, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.productID = this.route.snapshot.params.id;
    this.getProduct();
  }


  getProduct() {
    let cmd = [this.productID];
    this.dataService.getProductFromStock(cmd).subscribe(res => {
      console.log(res);
      this.products = res;
      this.prod = this.products[0];
    });
  }

  addtocart(id: any) {


    if (localStorage.getItem("cart") === null) {
      this.cart.push(this.prod);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    } else {
      this.cart1 = localStorage.getItem("cart");
      this.cart = JSON.parse(this.cart1);
      if (this.cart.filter(res => res.id === id).length == 0) {
        this.cart.push(this.prod);
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
