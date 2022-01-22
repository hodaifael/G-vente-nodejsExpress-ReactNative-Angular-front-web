import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-collissimo',
  templateUrl: './collissimo.component.html',
  styleUrls: ['./collissimo.component.css']
})
export class CollissimoComponent implements OnInit {
  public myAngularxQrCode: any;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.myAngularxQrCode = this.route.snapshot.params.id;
  }




}
