import { Component, OnInit ,ViewChild,ComponentFactoryResolver} from '@angular/core';
import { DynamicHost } from '../dynamic.directive';
import { dynamic } from '../dynamic.component';
import { dynamic1 } from '../dynamic1.component';

@Component({
  selector: 'app-main-dynamic',
  templateUrl: './main-dynamic.component.html',
  styleUrls: ['./main-dynamic.component.css']
})
export class MainDynamicComponent implements OnInit {

  constructor(public factoryRes:ComponentFactoryResolver) { 
    let id;
  }
 component=[dynamic,dynamic1];
  ngOnInit(): void {
  }
  @ViewChild(DynamicHost, { static: true })
  childRef!: DynamicHost;
  
  loadComponent(id:number){
    this.childRef.viewContainerRef.clear();
    const resolvedFactory=this.factoryRes.resolveComponentFactory(this.component[id]);
    this.childRef.viewContainerRef.createComponent(resolvedFactory);
  }

}
