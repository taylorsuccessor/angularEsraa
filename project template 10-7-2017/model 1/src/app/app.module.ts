

import { ShopComponent } from './ems/shop/shop.component';
import { AddComponent } from './ems/add/add.component';
import { EditComponent } from './ems/edit/edit.component';
import { ShowComponent } from './ems/show/show.component';
import { ShopService } from './shop.service';


@NgModule({
  declarations: [
  
  
    ShopComponent,
    AddComponent,
    EditComponent,
    ShowComponent,  
  ],
  
  providers: [ShopService], 
})

