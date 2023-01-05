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

    const value={      "fname": "karthick",
    "lname": "kumar",
    "number": 1234,
    "email": "abc@gmail.com",
    "gender": "male",
    "country": "india"};
    
    this.userservice.postTo(value).subscribe()
  }
  ngOnInit(){
    this.userservice.getUser().subscribe(
      (      res: User[]) => {
      this.users=res;
    });
  } 

}
