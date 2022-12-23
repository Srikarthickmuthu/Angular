import { Component, ViewEncapsulation } from "@angular/core";
@Component({
    selector:'app-main',
    template:`<app-none></app-none>
    <app-emulated></app-emulated>
    <app-shadow></app-shadow>`,
    encapsulation:ViewEncapsulation.ShadowDom
})
export class main{

}