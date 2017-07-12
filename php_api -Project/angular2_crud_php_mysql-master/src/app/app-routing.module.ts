import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { ShopComponent } from './ems/shop/shop.component';
import { EditComponent } from './ems/edit/edit.component';
import { ShowComponent } from './ems/show/show.component';
import { AddComponent } from './ems/add/add.component';
import { AddUserComponent } from './ems/add_user/add_user.component';
import {  LoginUserComponent } from './ems/login_user/login_user.component';
import { ProductComponent } from './ems/product/product.component';
import { AddProductComponent } from './ems/pro_add/pro_add.component';
import { EditProductComponent } from './ems/pro_edit/pro_edit.component';
import { ShowProductComponent } from './ems/pro_show/pro_show.component';



const routes: Routes = [
  {path:"", redirectTo:"/login", pathMatch:"full"},
  {path:"shop", component:ShopComponent},
  {path:"add", component:AddComponent},
  {path:"edit/:id", component:EditComponent},
  {path:"show/:id", component:ShowComponent},
   {path:"adduser", component:AddUserComponent},
   {path:"login", component:LoginUserComponent},
   {path:"product/:id", component:ProductComponent},
 {path:"pro_add", component:AddProductComponent},
  {path:"pro_edit/:id", component:EditProductComponent},
  {path:"pro_show/:id", component:ShowProductComponent},

   
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
