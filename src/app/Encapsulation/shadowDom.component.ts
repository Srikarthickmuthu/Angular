
import { Component } from "@angular/core";
@Component({
    selector:'app-shadow',
    template:`<h2>Shadow Dom<h2>
    <div class='shadow'>Shadow Dom Encapsulation</div>
    <app-emulated></app-emulated>
    <app-none></app-none>`,
    styles:['h2,shadow{color:blue;}']
})
export class shadow{

}