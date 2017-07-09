import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { ProductService } from '../../product.service';
import { Product } from '../../product';

@Component({
  selector: 'app-editProduct',
  templateUrl: './pro_edit.component.html',
  styleUrls: ['./pro_edit.component.css']
})
export class EditProductComponent implements OnInit {

   constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
      this.getSingleProduct();
  }

  //model:any={};
  model = new Product();
  id = this.route.snapshot.params['id'];
  getSingleProduct(){
    
    this.productService
      .getProduct(this.id)
      .subscribe(product =>{
          this.model = product[0];
          })
  };
  
  updateProduct(){
      this.productService
        .updateProduct(this.model)
        .subscribe(()=> this.goBack());
  }
 
   goBack(){
    this.router.navigate(['/product/{{shop.shop_id}}']);
    
  }
}
