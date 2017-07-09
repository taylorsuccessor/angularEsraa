import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from '../../product';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private _productService:ProductService,
    private router: Router
   ) { }
  productes:any;
  ngOnInit() {
    this.getProductes();
  }
  getProductes(){
     this._productService
        .getProductes()
        .subscribe(productes => {
          this.productes = productes;
      } )
  }
  deleteProduct(id){
      this._productService
        .deleteProduct(id)
        .subscribe(() => {
        this.getProductes();
      } )
  }

 

}
