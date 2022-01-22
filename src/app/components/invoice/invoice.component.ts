import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Infoclient } from 'src/app/infoclient';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  cmdId: any;
  products: Product[] = [];
  allProducts: any;
  infoclient: any;
  client: Infoclient = new Infoclient();
  total: any;
  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.cmdId = this.route.snapshot.params.id;
    this.getProducts();
    this.getInfo();
  }

  getProducts() {
    this.dataService.commandeDetails(this.cmdId).subscribe(res => {
      this.allProducts = res;
      this.products = this.allProducts;
      this.gettotal();
    });
  }

  getInfo() {
    this.dataService.infocilentFindone(this.cmdId).subscribe(res => {
      console.log(res);
      this.infoclient = res[0];
      this.client = this.infoclient;
    });
  }

  gettotal() {
    let t = 0;
    for (var val of this.products) {
      t += val.prix;
    }
    this.total = t;
  }
}
