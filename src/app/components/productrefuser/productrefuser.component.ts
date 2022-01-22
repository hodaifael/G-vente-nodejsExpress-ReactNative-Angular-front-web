import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-productrefuser',
  templateUrl: './productrefuser.component.html',
  styleUrls: ['./productrefuser.component.css']
})
export class ProductrefuserComponent implements OnInit {
  products: Product[] = [];
  newallproducts: Product[] = [];
  allProducts: any;
  search: string = '';
  path: any;
  notification: any;

  constructor(private dataService: DataService, private socket: Socket) { }

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
    this.dataService.getproductsRefuser().subscribe(res => {
      console.log(res);
      this.allProducts = res;
      this.newallproducts = this.allProducts;
      if (this.search != "") {
        this.products = this.newallproducts.filter(res => {
          return res.description.match(this.search);
        });
      } else if (this.search == "") {
        this.products = this.newallproducts;
      }
      this.path = "http://localhost:5000/uploads/"
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
      this.getProducts();
      this.notification = "new " + data.type + " add";
      this.socket.emit('editdoc', this.notification);
    });

  }
  adminrefuser(id: any) {
    this.dataService.adminrefuser(id).subscribe(res => {
      this.getProducts();
      this.searchByname();
    });
  }
}
