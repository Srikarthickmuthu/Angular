import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {
  
  constructor() {
    console.log("dfghjk")
   }
  name="OnIn it";
  show=false;
  toggle(){
    this.show=!this.show;
  }
  ngOnInit(): void {
    console.log("component initialized");
  }
}
