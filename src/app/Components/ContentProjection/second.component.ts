import { Component } from "@angular/core";
@Component({
    selector:'app-second',
    template:`
    <h2>Multi-slot content projection</h2>
    <ng-content select="[question]"></ng-content>
  `
})
export class second{
    
}