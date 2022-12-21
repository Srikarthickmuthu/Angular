import { Component } from "@angular/core";
@Component({
    selector:'app-classBinding',
    templateUrl:"./classBinding.component.html",
    styleUrls:['./classBinding.component.css']
})
export class classBinding{
    myClass='a';
    isTrue:boolean=false;
    constructor(){
        setTimeout(() => {
            this.myClass='b';
            this.isTrue=true;
        },3000);
    }
}