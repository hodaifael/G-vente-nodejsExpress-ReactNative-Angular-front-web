import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';

declare var Stripe: any; // : stripe.StripeStatic;


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  private stripe: Stripe;
  cardCaptureReady = false;
  cart: Product[] = [];
  cart1: any;
  total: any;
  constructor(private dataService: DataService, private router: Router) { }

  async ngOnInit() {
    this.cart1 = localStorage.getItem("cart");
    this.cart = JSON.parse(this.cart1);
    let t = 0;
    for (var val of this.cart) {
      t += val.prix;
    }
    this.total = t;
    this.stripe = await loadStripe('pk_test_51Jdb9YEDz5NI9QSPiW84tdENiRk7alDHAaaoaX0q55NWxOnEB9tfAymhXMebnLacZkR9llQ27lVyQLey80v72xLv00dlKrV92V');
    const elements = this.stripe.elements();
    const card = elements.create('card');
    card.mount('#card');
    card.on('change', (event) => {
      const displayError = document.getElementById('card-errors');
      event.error ? displayError.textContent = event.error.message : displayError.textContent = '';
    });

    const button = document.getElementById('button');

    button.addEventListener('click', async (event) => {
      event.preventDefault();
      const ownerInfo = {
        owner: { name: 'aminah', email: "saidiiaminahh@gmail.com" },
        amount: this.total * 100,
        currency: 'usd',
      };
      try {
        const result = await this.stripe.createSource(card, ownerInfo);
        let cmd = [result, this.total]
        this.dataService.purchase(cmd).subscribe(res => {

        });
      } catch (e) {
        console.warn(e.message);
      }

    })


  }


}