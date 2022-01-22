import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-commandeclient',
  templateUrl: './commandeclient.component.html',
  styleUrls: ['./commandeclient.component.css']
})
export class CommandeclientComponent implements OnInit {
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



  getProducts() {
    this.loginid = localStorage.getItem("loginid");
    this.dataService.allcommandeCilent(this.loginid).subscribe(res => {
      console.log(res);
      this.allProducts = res;
      this.products = this.allProducts;
    });
  }

}
