import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../user';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-loginUser',
  templateUrl: './login_user.component.html',
  styleUrls: ['./login_user.component.css']
})
export class LoginUserComponent implements OnInit {

 constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
      
  }

  
 
  
  loginUser(value: any){
   //   this.userService
     //   .loginUser(this.model)
    //  
   //   .subscribe(()=> this.router.navigate(['/shop']));

//   this.loading = true;
//
     //  .subscribe(
               // data => {
               //     this.router.navigate(['/shop']);
             //   },
              //  error => {
               //     this.alertService.error(error);
             //       this.loading = false;
            //    });


      console.log(value);
  }
 
   goBack(){
    this.router.navigate(['/adduser']);
  }
}





 