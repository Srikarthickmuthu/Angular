import { Component, ViewEncapsulation } from "@angular/core";
@Component({
    selector:'app-shadow',
    template:`<h2>Shadow Dom<h2>
    <div class='shadow'>Shadow Dom Encapsulation</div>
    `,
    styles:['h2,shadow{color:blue;}'],
    encapsulation:ViewEncapsulation.ShadowDom
})
export class shadow{

}