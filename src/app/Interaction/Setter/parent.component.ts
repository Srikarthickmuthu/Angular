import { Component } from "@angular/core"

@Component({
    selector:'app-setParent',
    template:`<h2>My parent name :{{name}}
    <app-setChild [name]='name'></app-setChild>`
})
export class setParent{
    name="Muthu";
}