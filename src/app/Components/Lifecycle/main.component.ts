import { Component } from "@angular/core";
@Component({
    selector:'app-mainLife',
    templateUrl:"./main.component.html"
})
export class mainLife{
    show=false;
    toggle(){
        this.show=!this.show;
    }
}