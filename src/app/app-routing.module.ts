import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ResetComponent } from './components/reset/reset.component';
import { AuthComponent } from './components/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { AddimageComponent } from './components/addimage/addimage.component';
import { RegistreComponent } from './components/registre/registre.component';
import { SingleproductComponent } from './components/singleproduct/singleproduct.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { InfoclientComponent } from './components/infoclient/infoclient.component';
import { ProductrefuserComponent } from './components/productrefuser/productrefuser.component';
import { StockComponent } from './components/stock/stock.component';
import { ProductsenattendComponent } from './components/productsenattend/productsenattend.component';
import { ProductclientRefComponent } from './components/productclient-ref/productclient-ref.component';
import { ProductclientcontreComponent } from './components/productclientcontre/productclientcontre.component';
import { ProductclientenattendComponent } from './components/productclientenattend/productclientenattend.component';
import { ProductclientoffreComponent } from './components/productclientoffre/productclientoffre.component';
import { CaracteristiquesTelComponent } from './components/caracteristiques-tel/caracteristiques-tel.component';
import { CaractiristiqueOrdinateurComponent } from './components/caractiristique-ordinateur/caractiristique-ordinateur.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { CaracteristiqueConsolejeuxComponent } from './components/caracteristique-consolejeux/caracteristique-consolejeux.component';
import { CaracteristiqueElectromenageComponent } from './components/caracteristique-electromenage/caracteristique-electromenage.component';
import { CaracteristiqueBricolageComponent } from './components/caracteristique-bricolage/caracteristique-bricolage.component';
import { CaracteristiqueObjetconnecteComponent } from './components/caracteristique-objetconnecte/caracteristique-objetconnecte.component';
import { GestioncommandeComponent } from './components/gestioncommande/gestioncommande.component';
import { DetailsCommandeComponent } from './components/details-commande/details-commande.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { PaymentComponent } from './components/payment/payment.component';
import { CollissimoComponent } from './components/collissimo/collissimo.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { TransferpaymentComponent } from './components/transferpayment/transferpayment.component';
import { ChiffreComponent } from './components/chiffre/chiffre.component';
import { CommandeclientComponent } from './components/commandeclient/commandeclient.component';
import { AddadminComponent } from './components/addadmin/addadmin.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: '', component: AuthComponent },
  { path: 'reset', component: ResetComponent },
  { path: 'register', component: RegistreComponent },
  { path: 'productenAttend', component: ProductsenattendComponent, canActivate: [AuthGuard] },
  { path: 'productrefuser', component: ProductrefuserComponent, canActivate: [AuthGuard] },
  { path: 'productoffre', component: ProductclientoffreComponent, canActivate: [AuthGuard] },
  { path: 'productclientref', component: ProductclientRefComponent, canActivate: [AuthGuard] },
  { path: 'productclientcontre', component: ProductclientcontreComponent, canActivate: [AuthGuard] },
  { path: 'productclientenAttend', component: ProductclientenattendComponent, canActivate: [AuthGuard] },
  { path: 'infoclient', component: InfoclientComponent, canActivate: [AuthGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: 'stock', component: StockComponent, canActivate: [AuthGuard] },
  { path: 'singleproduct/:id', component: SingleproductComponent, canActivate: [AuthGuard] },
  { path: 'addproduct', component: AddproductComponent, canActivate: [AuthGuard] },
  { path: 'addimage/:id', component: AddimageComponent, canActivate: [AuthGuard] },
  { path: 'ordinateur/:id', component: CaractiristiqueOrdinateurComponent, canActivate: [AuthGuard] },
  { path: 'reference', component: ReferenceComponent, canActivate: [AuthGuard] },
  { path: 'caracteristiqueTel', component: CaracteristiquesTelComponent, canActivate: [AuthGuard] },
  { path: 'caracteristiqueConsolejeux', component: CaracteristiqueConsolejeuxComponent, canActivate: [AuthGuard] },
  { path: 'caracteristiqueElectromenage', component: CaracteristiqueElectromenageComponent, canActivate: [AuthGuard] },
  { path: 'caracteristiqueBricolage', component: CaracteristiqueBricolageComponent, canActivate: [AuthGuard] },
  { path: 'caracteristiqueOrdinateurs', component: CaractiristiqueOrdinateurComponent, canActivate: [AuthGuard] },
  { path: 'caracteristiqueConnectes', component: CaracteristiqueObjetconnecteComponent, canActivate: [AuthGuard] },
  { path: 'gestioncommande', component: GestioncommandeComponent, canActivate: [AuthGuard] },
  { path: 'payement', component: PaymentComponent, canActivate: [AuthGuard] },
  { path: 'transfer/:id', component: TransferpaymentComponent, canActivate: [AuthGuard] },
  { path: 'chiffre', component: ChiffreComponent, canActivate: [AuthGuard] },
  { path: 'detailsCommande/:id', component: DetailsCommandeComponent, canActivate: [AuthGuard] },
  { path: 'invoice/:id', component: InvoiceComponent, canActivate: [AuthGuard] },
  { path: 'colissomo/:id', component: CollissimoComponent, canActivate: [AuthGuard] },
  { path: 'commandeclient', component: CommandeclientComponent, canActivate: [AuthGuard] },
  { path: 'addAdmin', component: AddadminComponent, canActivate: [AuthGuard] },
  { path: 'details/:id', component: DetailsComponent, canActivate: [AuthGuard] },


];

const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SocketIoModule.forRoot(config)
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

  ]
})
export class AppRoutingModule { }
