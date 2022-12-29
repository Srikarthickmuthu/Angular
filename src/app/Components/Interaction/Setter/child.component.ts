import { Component, Input } from '@angular/core'
@Component({
    selector: 'app-setChild',
    template: `<p>"{{name}}"</p>`
})
export class setChild {
    @Input()
    get name() : string {return this._name}

    

    set name(name: string) {
        this._name = name;
    }
    constructor (){
        console.log(this._name)
    }
     private _name = "";
}

