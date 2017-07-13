
import { ShopService } from '../../shop.service';
import { Shop } from '../../shop';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  
})
export class EditComponent implements OnInit {

   constructor(
   
    private shopService: ShopService
  ) { }

  ngOnInit() {
      this.getSingleShop();
  }

  
  model = new Shop();
  id = this.route.snapshot.params['id'];
  getSingleShop(){
    
    this.shopService
      .getShop(this.id)
      .subscribe(shop =>{
          this.model = shop[0];
          })
  };
  
  updateShop(){
      this.shopService
        .updateShop(this.model)
        .subscribe(()=> this.goBack());
  }
 
   goBack(){
    this.router.navigate(['/shop']);
  }
}
