import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-details-commande',
  templateUrl: './details-commande.component.html',
  styleUrls: ['./details-commande.component.css']
})
export class DetailsCommandeComponent implements OnInit {
  products: Product[] = [];
  allProducts: any;
  path: any;
  total: any;
  prodId: any;
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.prodId = this.route.snapshot.params.id;
    this.getProducts();
  }



  getProducts() {
    this.dataService.commandeDetails(this.prodId).subscribe(res => {
      this.allProducts = res;
      this.products = this.allProducts;
      this.gettotal();
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
