import { Component,OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Iuser } from '../user';
@Component({
  selector: 'app-http',
  templateUrl:"./http.component.html",
  styleUrls: ['./http.component.css']
})
export class Http implements OnInit{
  title = 'Http';
  
  public users!: Iuser[];

  constructor(public userservice:UserService){
  }
  ngOnInit(){
    this.userservice.getUser().subscribe(
      (      res: Iuser[]) => {
      this.users=res;
    });
  } 
}
