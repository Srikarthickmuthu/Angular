import { style } from "@angular/animations";
import { Component } from "@angular/core";
@Component({
    selector:'app-property-binding',
    templateUrl:'./property.component.html',
    styles:[`.special{
        color:red;
    }`]
})
export class Property{
    isUnchanges=true;
    constructor(){
        setTimeout(() => {
            this.isUnchanges=false;
        }, 3000);
    }
    itemImageUrl="../assets/images.jpeg";
    classes="special";
}