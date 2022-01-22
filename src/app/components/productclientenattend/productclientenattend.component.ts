import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-productclientenattend',
  templateUrl: './productclientenattend.component.html',
  styleUrls: ['./productclientenattend.component.css']
})
export class ProductclientenattendComponent implements OnInit {
  products: Product[] = [];
  newallproducts: Product[] = [];
  allProducts: any;
  search: string = '';
  path: any;
  loginid: any;
  private socket: any;
  public data: any;
  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {


    this.getProducts();
  }

  checkprix(prix: any) {
    if (prix == 0) {
      return 0;
    }
    return 1;
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
    this.dataService.getproductclientEnattend(this.loginid).subscribe(res => {
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
