import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addimage',
  templateUrl: './addimage.component.html',
  styleUrls: ['./addimage.component.css']
})
export class AddimageComponent implements OnInit {
  title = 'fileUpload';
  images: any;
  multipleImages = [];
  prodId: any;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.prodId = this.route.snapshot.params.id;

  }


  selectMultipleImage(event: any) {
    if (event.target.files.length > 0) {
      this.multipleImages = event.target.files;
    }
  }


  onMultipleSubmit() {
    const formData = new FormData();
    for (let img of this.multipleImages) {
      formData.append('files', img);
    }

    this.http.post<any>('http://localhost:5000/products/multipleFiles/' + this.prodId, formData).subscribe(res => {
      this.router.navigate(['../productoffre']);
    });
  }

}