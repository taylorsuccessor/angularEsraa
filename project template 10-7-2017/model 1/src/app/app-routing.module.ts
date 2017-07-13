

import { ShopComponent } from './ems/shop/shop.component';
import { EditComponent } from './ems/edit/edit.component';
import { ShowComponent } from './ems/show/show.component';
import { AddComponent } from './ems/add/add.component';


const routes: Routes = [
  
  {path:"shop", component:ShopComponent},
  {path:"add", component:AddComponent},
  {path:"edit/:id", component:EditComponent},
  {path:"show/:id", component:ShowComponent},
  

   
];

