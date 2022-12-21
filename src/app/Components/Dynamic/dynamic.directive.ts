import { Directive, ViewContainerRef } from "@angular/core";
@Directive({
    selector:'[dynamicHost]',
})
export class DynamicHost{
    constructor(public viewContainerRef:ViewContainerRef){
        
    }
}