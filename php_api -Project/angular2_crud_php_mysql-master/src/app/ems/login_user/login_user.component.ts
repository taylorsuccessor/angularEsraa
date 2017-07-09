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

  
 
  model = new User();
  loginUser(){
  this.userService
    .loginUser(this.model)
  .subscribe(()=> this.router.navigate(['/shop']));  

  }
 
  
   goBack(){
    this.router.navigate(['/adduser']);
  }
}





 