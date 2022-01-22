import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { DataService } from 'src/app/service/data.service';

declare var Stripe: any; // : stripe.StripeStatic;


@Component({
  selector: 'app-transferpayment',
  templateUrl: './transferpayment.component.html',
  styleUrls: ['./transferpayment.component.css']
})

export class TransferpaymentComponent implements OnInit {
  private stripe: Stripe;
  cardCaptureReady = false;
  prix: any;

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  async ngOnInit() {
    this.prix = this.route.snapshot.params.id;
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
        amount: 2000 * 100,
        currency: 'usd',
      };
      try {
        const result = await this.stripe.createSource(card, ownerInfo);
        let cmd = [result, this.prix]
        this.dataService.transfer(cmd).subscribe(res => {

        });
      } catch (e) {
        console.warn(e.message);
      }

    })


  }


}