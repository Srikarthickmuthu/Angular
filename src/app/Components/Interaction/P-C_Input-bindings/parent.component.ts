import { Component } from "@angular/core";
@Component({
    selector:'app-parent',
    template:`<h2>{{master}} controls {{hero}}
    <app-child [hero]='hero' [master]='master'></app-child>`
})
export class parent{
    hero='karthick';
    master="sri";

}