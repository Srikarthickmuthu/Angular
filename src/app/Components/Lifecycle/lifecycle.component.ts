import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, Input} from '@angular/core';

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
  
  @Input() message!: string;

  ngOnInit(): void {
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

  ngOnChanges(changes:SimpleChanges){
    console.log("changes happenning");
}
}
