import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-chiffre',
  templateUrl: './chiffre.component.html',
  styleUrls: ['./chiffre.component.css']
})
export class ChiffreComponent implements OnInit {

  achat: any;
  allachat: any;
  vente: any;
  allvente: any;
  search: string = '';
  path: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getchiffreAchte();
    this.getchiffreVendu();
  }



  getchiffreAchte() {
    this.dataService.getchiffrep("hello").subscribe(res => {
      this.achat = res;
      this.allachat = this.achat[0].somme;

    });

  }
  getchiffreVendu() {
    this.dataService.getchiffrec("hello").subscribe(res => {
      this.vente = res;
      this.allvente = this.vente[0].somme;

    });
  }

}
