import {Component,Input} from '@angular/core';
@Component({
    selector:'app-child',
    template:`<h3>{{heroname}} says the name {{mastername}}`
})
export class child{
    @Input('hero') heroname="";
    @Input('master') mastername="";
}
