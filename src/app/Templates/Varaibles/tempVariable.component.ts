import { Component } from "@angular/core";
@Component({
    selector:'app-tempVariable',
    templateUrl:'./tempVariable.component.html'
})
export class tempVariable{
    calling(value:any){
        // console.log(value);
        return value;
    }
}