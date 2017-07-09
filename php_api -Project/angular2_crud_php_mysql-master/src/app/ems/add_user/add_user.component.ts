import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../user';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-addUser',
  templateUrl: './add_user.component.html',
  styleUrls: ['./add_user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(
    private userService: UserService,
     private router: Router) { }

  ngOnInit() {
  }

model = new User();
 addUser(){
    this.userService
    .addUser(this.model)
  .subscribe(()=> this.router.navigate(['/shop']));
     
}
  goBack(){
    this.router.navigate(['/login']);
  }
}