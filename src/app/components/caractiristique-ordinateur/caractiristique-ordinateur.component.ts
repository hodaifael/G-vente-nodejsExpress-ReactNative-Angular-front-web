import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Caracteristique } from 'src/app/caracteristique';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-caractiristique-ordinateur',
  templateUrl: './caractiristique-ordinateur.component.html',
  styleUrls: ['./caractiristique-ordinateur.component.css']
})
export class CaractiristiqueOrdinateurComponent implements OnInit {
  productsMarque: Product[] = [];
  productsDescription: Product[] = [];
  productsEtat: Product[] = [];
  productsCaract1: Product[] = [];
  productsCaract: any;
  newallproducts: Product[] = [];
  Typeproducts: Product[] = [];
  allProducts: any;
  newallproducts1: any;
  caracts: Caracteristique[] = [];
  allcaract: any;
  prod = new Caracteristique();
  message = "";
  data: any;
  typeProduct: any;
  product1: any;
  product = new Product();
  prix: any;
  idproduct: any;
  id: any;
  loginid: any;
  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getproductBytype();
  }
  getproductBytype() {
    this.product1 = localStorage.getItem("product");
    this.product = JSON.parse(this.product1);
    this.typeProduct = localStorage.getItem("typeProduct");
    this.dataService.getproductBytype(this.typeProduct).subscribe(res => {
      this.allProducts = res;
      this.Typeproducts = this.allProducts;

    });
  }

  goback() {
    this.location.back();
  }

  insertProduct() {

    this.checkmarque(this.Typeproducts);
    if (this.productsMarque.length !== 0) {
      this.checkdescription(this.productsMarque);
      if (this.productsDescription.length !== 0) {
        this.checkEtat(this.productsDescription);
      } else {
        this.checkEtat(this.productsMarque);
      }
    } else {
      this.checkdescription(this.typeProduct);
      if (this.productsDescription.length !== 0) {
        this.checkEtat(this.productsDescription);
      } else {
        this.checkEtat(this.Typeproducts);

      }
    }

    if (this.product.prixofficiel == 0) {
      this.dataService.getallcaractiristique(this.newallproducts).subscribe(res => {
        console.log(res);
        this.allcaract = res;
        this.caracts = this.allcaract;
        this.checkCaract(this.caracts);
      });
    } else {
      switch (this.product.etat_esthetique) {

        case "aucun rayure":
          this.prix = this.product.prixofficiel * 0.65;
          break;
        case "1 rayure":
          this.prix = this.product.prixofficiel * 0.60;
          break;
        case "2 rayure":
          this.prix = this.product.prixofficiel * 0.55;
          break;
        case "Plus de 3 rayures":
          this.prix = this.product.prixofficiel * 0.50;
          break;
      }

      this.insertnewproduct();
    }
  }

  insertnewproduct() {
    this.loginid = localStorage.getItem("loginid");
    this.product.id_Client = this.loginid;
    if (this.product.prixofficiel == 0) {
      console.log(this.product.prixofficiel);
      this.product.etat = "offre";
    } else {
      this.product.etat = "reference";
    }
    this.product.prix = this.prix;
    this.dataService.insertProduct(this.product).subscribe(res => {
      this.data = res;
      this.id = this.data.data;
      this.insertcaract();
    });
  }



  insertcaract() {
    this.prod.id_product = this.id;
    this.dataService.insertcaractistiquePhone(this.prod).subscribe(res => {
      this.message = "product inserted";
      if (this.product.prixofficiel == 0) {
        this.router.navigate(['../addimage/' + this.id]);
      } else {
        this.router.navigate(['../reference']);
      }
    });

  }
  
  checkmarque(array: any) {
    for (var val of array) {
      if (val.marque == this.product.marque) {
        this.productsMarque.push(val);
      }
    }
  }
  checkdescription(array: any) {
    for (var val of array) {
      if (val.description == this.product.description) {
        this.productsDescription.push(val);
      }
    }
  }

  checkEtat(array: any) {
    for (var val of array) {
      if (val.etat_esthetique == this.product.etat_esthetique) {
        this.productsEtat.push(val);
      }
    }
    if (this.productsEtat.length !== 0) {
      this.remplirNewallproducts(this.productsEtat);
    } else {
      this.remplirNewallproducts(array);
    }
  }


  remplirNewallproducts(array: any) {
    this.newallproducts = array;
    this.newallproducts1 = array;
  }


  checkCaract(array: any) {
    for (var val of array) {
      if (val.ram == this.prod.ram && val.processeur == this.prod.processeur && val.disquedur == this.prod.disquedur) {
        this.productsCaract1.push(val.id_product);
      }
    }
    this.productsCaract = this.productsCaract1;
    let p = 0;
    let pofficiele = 0;

    for (var val of this.productsCaract) {
      for (var val1 of this.newallproducts1) {
        if (val == val1.id) {
          if (p == 0) {
            p = val1.prix;
            pofficiele = val1.prixofficiel;
          } else if (p > val1.prix) {
            p = val1.prix;
            pofficiele = val1.prixofficiel;
          }
        }
      }
    }

    this.prix = p;

    this.product.prixofficiel = pofficiele;

    this.insertnewproduct();
  }
}