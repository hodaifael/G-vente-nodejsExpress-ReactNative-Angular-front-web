import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-productclientcontre',
  templateUrl: './productclientcontre.component.html',
  styleUrls: ['./productclientcontre.component.css']
})
export class ProductclientcontreComponent implements OnInit {
  products: Product[] = [];
  newallproducts: Product[] = [];
  allProducts: any;
  search: string = '';
  path: any;
  loginid: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  searchByname() { // with type info
    if (this.search != "") {
      this.products = this.newallproducts.filter(res => {
        return res.description.match(this.search);
      });
    } else if (this.search == "") {
      this.products = this.newallproducts;
    }

  }

  getProducts() {
    this.loginid = localStorage.getItem("loginid");
    this.dataService.getproductclientContre(this.loginid).subscribe(res => {
      this.allProducts = res;
      this.newallproducts = this.allProducts;
      if (this.search != "") {
        this.products = this.newallproducts.filter(res => {
          return res.description.match(this.search);
        });
      } else if (this.search == "") {
        this.products = this.newallproducts;
      }
      this.path = this.allProducts[1];
    });
  }

  accepte(id: any) {
    this.dataService.accepte(id).subscribe(res => {
      this.getProducts();
      this.searchByname();
    });
  }


  refuser(id: any) {
    this.dataService.deleteProduct(id).subscribe(res => {
      this.getProducts();
      this.searchByname();
    });
  }

}
