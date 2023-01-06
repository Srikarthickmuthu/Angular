import { AfterContentInit, Component, Input, OnChanges, SimpleChanges } from "@angular/core";
@Component({
    selector:'app-mainLife',
    templateUrl:"./main.component.html"
})
export class mainLife implements AfterContentInit{
    show=false;
    toggle(){
        this.show=!this.show;
    }
    message='';

    ngAfterContentInit(){
    console.log("Ng template has been initiated")   
    }
    
}