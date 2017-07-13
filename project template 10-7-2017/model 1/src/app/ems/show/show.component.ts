
import { ShopService } from '../../shop.service';
import { Shop } from '../../shop';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',

})
export class ShowComponent implements OnInit {

  constructor(

    private shopService: ShopService
  ) { }

  ngOnInit() {
    this.getSingleShop();
  }
  shop:Shop;
  getSingleShop(){
    var id = this.route.snapshot.params['id'];
    this.shopService
      .getShop(id)
      .subscribe(shop =>{
          this.shop = shop[0];
          })
  };

  goBack(){
    this.router.navigate(['/shop']);
  }
}
