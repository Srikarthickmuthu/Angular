import { Component } from "@angular/core";
@Component({
    selector:'app-interpolation',
    template:`<h2>Interpolation</h2>
    <p>In this the {{name}} is called</p>`
})
export class interpolation{
    name="Interpolation";
}