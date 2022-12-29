import { Component, Output } from "@angular/core";
@Component({
    selector:'app-parent',
    template:`<h2>{{mastername}} controls {{heroname}} {{send}} </h2>
    <app-child (send)="send=$event" [hero]='heroname' [master]='mastername'></app-child>`
})
export class parent{
    heroname='karthick';
    mastername="sri";
    @Output() send:any;
}