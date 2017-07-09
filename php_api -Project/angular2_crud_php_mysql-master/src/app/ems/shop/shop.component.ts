import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../shop.service';
import { Shop } from '../../shop';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(
    private _shopService:ShopService,
    private router: Router
   ) { }
  shopes:any;
  ngOnInit() {
    this.getShopes();
  }
  getShopes(){
     this._shopService
        .getShopes()
        .subscribe(shopes => {
          this.shopes = shopes;
      } )
  }
  deleteShop(id){
      this._shopService
        .deleteShop(id)
        .subscribe(() => {
        this.getShopes();
      } )
  }

 

}


 


   

