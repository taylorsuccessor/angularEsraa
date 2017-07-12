import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';

import { ShopComponent } from './ems/shop/shop.component';
import { AddComponent } from './ems/add/add.component';
import { EditComponent } from './ems/edit/edit.component';
import { ShowComponent } from './ems/show/show.component';
import { ShopService } from './shop.service';
import { AddUserComponent } from './ems/add_user/add_user.component';
import { UserService } from './user.service';
import { LoginUserComponent } from './ems/login_user/login_user.component';
import { ProductComponent } from './ems/product/product.component';
import { AddProductComponent } from './ems/pro_add/pro_add.component';
import { EditProductComponent } from './ems/pro_edit/pro_edit.component';
import { ShowProductComponent } from './ems/pro_show/pro_show.component';
import { ProductService } from './product.service';



@NgModule({
  declarations: [
    AppComponent,
  
    ShopComponent,
    AddComponent,
    EditComponent,
    ShowComponent,
    AddUserComponent,
    LoginUserComponent,
   ProductComponent,
    AddProductComponent,
    EditProductComponent,
   ShowProductComponent,
   
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShopService,UserService,ProductService],
//,ProductService
  bootstrap: [AppComponent]
})
export class AppModule { }
