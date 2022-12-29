import { Component } from "@angular/core";
@Component({
    selector:'app-parent',
    template:`<h2>{{mastername}} controls {{heroname}}
    <app-child [hero]='heroname' [master]='mastername'></app-child>`
})
export class parent{
    heroname='karthick';
    mastername="sri";

}