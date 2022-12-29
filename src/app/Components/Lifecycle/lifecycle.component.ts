import { Component, OnInit, OnDestroy, OnChanges} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html'
})
export class LifecycleComponent implements OnInit, OnDestroy,OnChanges {
  constructor() {
    
  }
timeoutInterval: NodeJS.Timer | undefined;

  show = false;
  toggle() {
    this.show = !this.show;
  }

  ngOnChanges(){
    console.log("On changes");
  }
  ngOnInit() {
    console.log("component initialized");
    this.timeoutInterval=  setInterval(()=>
      {
        console.log(new Date());
      }
      ,1000)
    
  }
  ngOnDestroy() {
    console.log("component destroyed");
    if(this.timeoutInterval){
      clearInterval(this.timeoutInterval);
    }
  }
}
