import { Component,OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
@Component({
  selector: 'app-http',
  templateUrl:"./http.component.html",
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit{
  title = 'Http';
  
  public users!: User[];

  constructor(public userservice:UserService){
  }
  ngOnInit(){
    this.userservice.getUser().subscribe(
      (      res: User[]) => {
      this.users=res;
    });
  } 
}
