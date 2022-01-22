import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {
  productID: any;
  products: any;
  prod = new Product();
  message = "";

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productID = this.route.snapshot.params.id;
    this.getProduct();
  }


  getProduct() {
    this.dataService.getProduct(this.productID).subscribe(res => {
      console.log(res);
      this.products = res;
      this.prod = this.products[0];
    });
  }


  editProduct() {

    console.log(this.prod);
    this.dataService.editProduct(this.prod).subscribe(res => {
      this.message = "product updated";
      this.getProduct();
    });
  }
}
