
import { ShopService } from '../../shop.service';
import { Shop } from '../../shop';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(
    private _shopService:ShopService,
    
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


 


   

