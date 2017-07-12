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




@NgModule({
  declarations: [
    AppComponent,
  
    ShopComponent,
    AddComponent,
    EditComponent,
    ShowComponent,
    
 
   
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShopService],

  bootstrap: [AppComponent]
})
export class AppModule { }
