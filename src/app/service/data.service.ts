import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(private httpclient: HttpClient) { }

  ///admiin

  getproductsEnattend() {
    return this.httpclient.get('http://localhost:5000/products/enattend');
  }
  getproductsRefuser() {
    return this.httpclient.get('http://localhost:5000/products/refuser');
  }


  adminvalide(data: any) {
    return this.httpclient.post('http://localhost:5000/products/admin/valide/', data);
  }
  adminrefuser(id: any) {
    return this.httpclient.get('http://localhost:5000/products/admin/refuser/' + id);
  }

  getProduct(id: any) {
    return this.httpclient.get('http://localhost:5000/products/' + id);
  }
  getProductFromStock(data: any) {
    return this.httpclient.post('http://localhost:5000/products/stock/', data);
  }
  editProduct(data: any) {
    return this.httpclient.post('http://localhost:5000/products/admin/contreoffre/', data);
  }
  changeprix(data: any) {
    return this.httpclient.post('http://localhost:5000/products/admin/changeprix/', data);
  }



  getcaract(data: any) {
    return this.httpclient.post('http://localhost:5000/products/caract/', data);
  }

  insertcommande(data: any) {
    return this.httpclient.post('http://localhost:5000/commande/', data);
  }
  purchase(data: any) {
    return this.httpclient.post('http://localhost:5000/purchase/', data);
  }
  transfer(data: any) {
    return this.httpclient.post('http://localhost:5000/transfer/', data);
  }




  //marchand
  getproductclientOffre(id: any) {
    return this.httpclient.get('http://localhost:5000/products/client/offre/' + id);
  }
  getproductclientEnattend(id: any) {
    return this.httpclient.get('http://localhost:5000/products/client/enattend/' + id);
  }
  getproductclientRefuser(id: any) {
    return this.httpclient.get('http://localhost:5000/products/client/refuser/' + id);
  }
  getproductclientContre(id: any) {
    return this.httpclient.get('http://localhost:5000/products/client/contre/' + id);
  }



  accepte(id: any) {
    return this.httpclient.get('http://localhost:5000/products/client/accepte/' + id);
  }
  deleteProduct(id: any) {
    return this.httpclient.delete('http://localhost:5000/products/' + id);
  }
  insertProduct(data: any) {
    return this.httpclient.post('http://localhost:5000/products/', data);
  }

  getstock(data: any) {
    return this.httpclient.get('http://localhost:5000/products/stock/' + data);
  }


  insertcaractistiquePhone(data: any) {
    return this.httpclient.post('http://localhost:5000/products/cartct/phone', data);
  }



  //authentification

  insertUser(data: any) {
    return this.httpclient.post('http://localhost:5000/user', data);
  }

  auth(data: any) {
    return this.httpclient.post('http://localhost:5000/user/auth', data);
  }

  updatepass(data: any) {
    return this.httpclient.post('http://localhost:5000/user/update', data);
  }



  getproductBytype(type: any) {
    return this.httpclient.get('http://localhost:5000/products/type/' + type);
  }
  getallcaractiristique(data: any) {
    return this.httpclient.put('http://localhost:5000/products/allcaractiristique/', data);
  }

  allcommande() {
    return this.httpclient.get('http://localhost:5000/commande/allcommande/');
  }
  allcommandeCilent(id: any) {
    return this.httpclient.get('http://localhost:5000/commande/allcommandeCilent/' + id);
  }
  commandeDetails(id: any) {
    return this.httpclient.get('http://localhost:5000/commande/commandeDetails/' + id);
  }

  infocilentFindone(id: any) {
    return this.httpclient.get('http://localhost:5000/commande/findOneclient/' + id);
  }

  getchiffrep(data: any) {
    return this.httpclient.get('http://localhost:5000/products/chiffreproduct/' + data);
  }
  getchiffrec(data: any) {
    return this.httpclient.get('http://localhost:5000/products/chiffrecommande/' + data);
  }



}

