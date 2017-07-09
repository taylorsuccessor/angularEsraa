import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from '../../product';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-addProduct',
  templateUrl: './pro_add.component.html',
  styleUrls: ['./pro_add.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(
    private productService: ProductService,
     private router: Router) { }

  ngOnInit() {
  }

model = new Product();
  addProduct(){
      this.productService 
        .addProduct(this.model)
        .subscribe(()=> this.goBack());
  }
   goBack(){
    this.router.navigate(['/product/{{shop.shop_id}}']);
  }
}