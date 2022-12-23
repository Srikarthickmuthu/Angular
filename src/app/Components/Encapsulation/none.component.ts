import { Component, ViewEncapsulation } from "@angular/core";
@Component({
    selector:'app-none',
    template:` <h2>None</h2>
    <div class="none">No encapsulation</div>
  `,
  styles:['h2,none{color:red;}'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class None{

}