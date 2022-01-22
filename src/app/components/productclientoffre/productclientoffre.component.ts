import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-productclientoffre',
  templateUrl: './productclientoffre.component.html',
  styleUrls: ['./productclientoffre.component.css']
})
export class ProductclientoffreComponent implements OnInit {
  products: Product[] = [];
  newallproducts: Product[] = [];
  allProducts: any;
  search: string = '';
  path: any;
  loginid: any;
  typeProduct: any;
  constructor(private dataService: DataService, private router: Router) { }

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
    this.dataService.getproductclientOffre(this.loginid).subscribe(res => {
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


  accepte(id: any) {
    this.dataService.accepte(id).subscribe(res => {
      this.router.navigate(['../colissomo/' + id]);
    });
  }


  refuser(id: any) {
    this.dataService.deleteProduct(id).subscribe(res => {
      this.getProducts();
      this.searchByname();
    });
  }

}
