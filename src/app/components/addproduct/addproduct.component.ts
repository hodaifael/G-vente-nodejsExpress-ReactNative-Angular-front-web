import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  prod = new Product();
  message = "";
  loginid: any;
  data: any;
  id: any;
  constructor(private dataService: DataService, private router: Router, private location: Location) { }

  ngOnInit(): void {
  }
  goback() {
    this.location.back();
  }
  insertProduct() {
    localStorage.setItem('typeProduct', this.prod.type);
    localStorage.setItem("product", JSON.stringify(this.prod));

    switch (this.prod.type) {

      case "caract_tel":
        this.router.navigate(['../caracteristiqueTel']);
        break;
      case "Consoles de jeux":
        this.router.navigate(['../caracteristiqueConsolejeux']);
        break;
      case "Objets connectes":
        this.router.navigate(['../caracteristiqueConnectes']);
        break;
      case "Gros electroménagers":
        this.router.navigate(['../caracteristiqueElectromenage']);
        break;
      case "Bricolage":
        this.router.navigate(['../caracteristiqueBricolage']);
        break;
      case "Ordinateurs":
        this.router.navigate(['../caracteristiqueOrdinateurs']);
        break;
    }

  }


}
