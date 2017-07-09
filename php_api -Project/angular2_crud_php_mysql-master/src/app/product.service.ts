import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  productes=[];
  constructor(private _http:Http) { }
  checkMe:any;
  getProductes(){
    return this._http.get("http://localhost/api_json/pro_select.php/")
      .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json()
        }
       
      });
  }
  
  getProduct(id){
    return this._http.post("http://localhost/api_json/pro_selectone.php/",{'id':id})
      .map(res=>res.json());
  }
  deleteProduct(id){
    return this._http.post("http://localhost/api_json/pro_delete.php/",{'id':id})
      .map(()=>this.getProductes());
  }
  updateProduct(info){
    return this._http.post("http://localhost/api_json/pro_update.php/", info)
      .map(()=>"");
  }
    
 addProduct(info){
    return this._http.post("http://localhost/api_json/pro_add.php",info)
      .map(()=>"");
  }




}
