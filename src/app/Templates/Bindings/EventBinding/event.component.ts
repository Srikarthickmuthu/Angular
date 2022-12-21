import { Component } from "@angular/core";
@Component({
    selector:'app-event-binding',
    templateUrl:'./event.component.html'
})
export class event{
    value='Hello Click Me!';
   function(){
        this.value="Haiii Karthick";
   }
}