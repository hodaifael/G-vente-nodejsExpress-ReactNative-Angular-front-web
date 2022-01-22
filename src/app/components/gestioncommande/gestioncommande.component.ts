import { Component, OnInit } from '@angular/core';
import { Infoclient } from 'src/app/infoclient';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-gestioncommande',
  templateUrl: './gestioncommande.component.html',
  styleUrls: ['./gestioncommande.component.css']
})
export class GestioncommandeComponent implements OnInit {
  products: Infoclient[] = [];
  newallproducts: Infoclient[] = [];
  allProducts: any;
  search: string = '';
  path: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getProducts();
  }



  getProducts() {
    this.dataService.allcommande().subscribe(res => {
      this.allProducts = res;
      this.products = this.allProducts;
    });
  }

}
