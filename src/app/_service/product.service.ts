import { Injectable } from '@angular/core';
import { Product } from '../_model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  _productlist:Product[]=[];
  constructor() { }

  addProduct(product:Product){
    this._productlist.push(product);
  }

  removeProduct(id:number){
    const product= this._productlist.findIndex(function(c){
      return c.id===id;
    });
    this._productlist.splice(product,1);
  }

  getAllProducts(){
    return this._productlist;
  }

}
