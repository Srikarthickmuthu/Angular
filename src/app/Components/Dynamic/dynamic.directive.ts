import { Directive, ViewContainerRef } from "@angular/core";
@Directive({
    selector:'[dynamicHost]', //attribute selector
})
export class DynamicHost{
    constructor(public viewContainerRef:ViewContainerRef){
        
    }
}