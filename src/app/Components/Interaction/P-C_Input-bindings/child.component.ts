import {Component,Input} from '@angular/core';
@Component({
    selector:'app-child',
    template:`<h3>{{hero}} says the name {{master}}`
})
export class child{
    @Input('hero') hero="";
    @Input('master') master="";

}
