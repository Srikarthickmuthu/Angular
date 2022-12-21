import { Component } from "@angular/core";
@Component({
    selector:'app-dynamic',
    template:`<div class="ad-banner-example">
    <h3>Advertisements</h3>
    <ng-template dynamicHost></ng-template>
  </div>`
})
export class dynamic{

}
