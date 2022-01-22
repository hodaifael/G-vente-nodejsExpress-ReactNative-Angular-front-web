import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule, DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResetComponent } from './components/reset/reset.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './components/auth/auth.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { AddimageComponent } from './components/addimage/addimage.component';
import { RegistreComponent } from './components/registre/registre.component';
import { SingleproductComponent } from './components/singleproduct/singleproduct.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { InfoclientComponent } from './components/infoclient/infoclient.component';
import { ProductrefuserComponent } from './components/productrefuser/productrefuser.component';
import { ProductsenattendComponent } from './components/productsenattend/productsenattend.component';
import { StockComponent } from './components/stock/stock.component';
import { ProductclientRefComponent } from './components/productclient-ref/productclient-ref.component';
import { ProductclientcontreComponent } from './components/productclientcontre/productclientcontre.component';
import { ProductclientenattendComponent } from './components/productclientenattend/productclientenattend.component';
import { ProductclientoffreComponent } from './components/productclientoffre/productclientoffre.component';
import { CaracteristiquesTelComponent } from './components/caracteristiques-tel/caracteristiques-tel.component';
import { CaractiristiqueOrdinateurComponent } from './components/caractiristique-ordinateur/caractiristique-ordinateur.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { CaracteristiqueBricolageComponent } from './components/caracteristique-bricolage/caracteristique-bricolage.component';
import { CaracteristiqueConsolejeuxComponent } from './components/caracteristique-consolejeux/caracteristique-consolejeux.component';
import { CaracteristiqueElectromenageComponent } from './components/caracteristique-electromenage/caracteristique-electromenage.component';
import { CaracteristiqueObjetconnecteComponent } from './components/caracteristique-objetconnecte/caracteristique-objetconnecte.component';
import { GestioncommandeComponent } from './components/gestioncommande/gestioncommande.component';
import { DetailsCommandeComponent } from './components/details-commande/details-commande.component';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { PaymentComponent } from './components/payment/payment.component';
import { CollissimoComponent } from './components/collissimo/collissimo.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { ChiffreComponent } from './components/chiffre/chiffre.component';
import { TransferpaymentComponent } from './components/transferpayment/transferpayment.component';
import { QRCodeModule } from 'angularx-qrcode';
import { CommandeclientComponent } from './components/commandeclient/commandeclient.component';
import { AddadminComponent } from './components/addadmin/addadmin.component';
import { DetailsComponent } from './components/details/details.component';




@NgModule({
  declarations: [
    NavbarComponent,
    ResetComponent,
    AppComponent,
    AuthComponent,
    AddproductComponent,
    AddimageComponent,
    RegistreComponent,
    ProductclientoffreComponent,
    SingleproductComponent,
    CheckoutComponent,
    InfoclientComponent,
    ProductrefuserComponent,
    ProductsenattendComponent,
    StockComponent,
    ProductclientRefComponent,
    ProductclientcontreComponent,
    ProductclientenattendComponent,
    ProductclientoffreComponent,
    CaracteristiquesTelComponent,
    CaractiristiqueOrdinateurComponent,
    CaracteristiqueBricolageComponent,
    CaracteristiqueConsolejeuxComponent,
    CaracteristiqueElectromenageComponent,
    CaracteristiqueObjetconnecteComponent,
    ReferenceComponent,
    GestioncommandeComponent,
    DetailsCommandeComponent,
    PaymentComponent,
    CollissimoComponent,
    InvoiceComponent,
    ChiffreComponent,
    TransferpaymentComponent,
    CommandeclientComponent,
    AddadminComponent,
    DetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NotificationModule,
    QRCodeModule


  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
