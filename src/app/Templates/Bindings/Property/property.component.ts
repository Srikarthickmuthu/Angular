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
    itemImageUrl="../assets/images.jpeg";
    isUnchanges="true";
    classes="special";
}