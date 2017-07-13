
import { ShopService } from '../../shop.service';
import { Shop } from '../../shop';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-addShop',
  templateUrl: './add.component.html',

})
export class AddComponent implements OnInit {

  constructor(
    private shopService: ShopService,
     private router: Router) { }

  ngOnInit() {
  }

model = new Shop();
  addShop(){
      this.shopService
        .addShop(this.model)
        .subscribe(()=> this.goBack());
  }
   goBack(){
    this.router.navigate(['/shop']);
  }
}