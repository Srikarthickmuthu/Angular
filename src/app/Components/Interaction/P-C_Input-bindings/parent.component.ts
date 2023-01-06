import { Component, Output } from "@angular/core";
@Component({
    selector:'app-parent',
    template:`
    <p>{{mastername}} controls {{heroname}} {{send}} </p>
    <app-child (send)="send=$event" [hero]='heroname' [master]='mastername'></app-child>`
})
export class parent{
    heroname='karthick';
    mastername="sri";
    @Output() send:any;
}