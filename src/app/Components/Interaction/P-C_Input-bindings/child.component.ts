import {Component,EventEmitter,Input, Output} from '@angular/core';
@Component({
    selector:'app-child',
    template:`<h3>{{heroname}} says the name {{mastername}}</h3>
    <button (click)="sending()">Click</button>`

})
export class child{
    @Input('hero') heroname="";
    @Input('master') mastername="";

    @Output() send=new EventEmitter<any>();
    sending(){
        this.send.emit([1,2,3,4,4]);
    }
}
