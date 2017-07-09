import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { ProductService } from '../../product.service';
import { Product } from '../../product';
@Component({
  selector: 'app-showProduct',
  templateUrl: './pro_show.component.html',
  styleUrls: ['./pro_show.component.css']
})
export class ShowProductComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getSingleProduct();
  }
  product:Product;
  getSingleProduct(){
    var id = this.route.snapshot.params['id'];
    this.productService
      .getProduct(id)
      .subscribe(product =>{
          this.product = product[0];
          })
  };

  goBack(){
    this.router.navigate(['/product/{{shop.shop_id}}']);
  }
}
