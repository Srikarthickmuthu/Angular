import { Component, ViewEncapsulation } from "@angular/core";
@Component({
    selector: 'app-emulated',
    template: `<h2>Emulated</h2>
    <div class="emulated">Emulated encapsulation</div>`,
    styles: ['h2,emulated{color:green;}'],
    encapsulation: ViewEncapsulation.Emulated
})
export class Emulated {
       
}
