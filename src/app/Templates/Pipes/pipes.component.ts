
import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector:'app-pipes',
    templateUrl:'./pipes.component.html'
})
export class pipes{
    
    constructor( private http:HttpClient){ }

    jsonData=this.http.get("http://localhost:3000/results");


    birthday= new Date();
    amount = 1000;
    value=[1,2,3,4,5,6,7,8,9,10];
    toggle = true; // start with true == shortDate
    get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
    toggleFormat() { this.toggle = !this.toggle; }
  }

  