import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Product } from 'src/app/product';
import { Document } from 'src/app/models/document.model';

import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-productsenattend',
  templateUrl: './productsenattend.component.html',
  styleUrls: ['./productsenattend.component.css']
})
export class ProductsenattendComponent implements OnInit {
  products: Product[] = [];
  newallproducts: Product[] = [];
  allProducts: any;
  search: string = '';
  path: any;
  notification: any;
  currentDocument = this.socket.fromEvent<Document>('document');
  message: Document[] = [];
  prod = new Product();
  id: any;
  constructor(private dataService: DataService, private socket: Socket, private router: Router, private route: ActivatedRoute) {
    this.getProducts();
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
  changeprix(id: any) {
    this.prod.id = id;
    this.dataService.changeprix(this.prod).subscribe(res => {
      this.getProducts();
    });


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
    this.dataService.getproductsEnattend().subscribe(res => {
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


  deleteProduct(id: any) {
    this.dataService.deleteProduct(id).subscribe(res => {
      this.getProducts();
      this.searchByname();
    });
  }



  adminvalide(data: any) {
    let porcentage = data.prixofficiel * 0.05;
    data.prix = data.prix + porcentage;
    let cmd = [data, data.id];
    this.dataService.adminvalide(cmd).subscribe(res => {
      this.notification = "new " + data.type + " add";
      this.socket.emit('editdoc', this.notification);
      this.router.navigate(['../transfer/' + data.prix]);
    });
  }


  adminrefuser(id: any) {
    this.dataService.adminrefuser(id).subscribe(res => {
      this.getProducts();
      this.searchByname();
    });
  }
}
