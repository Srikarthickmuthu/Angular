import {Component,EventEmitter,Input, Output} from '@angular/core';
@Component({
    selector:'app-child',
    template:`<p>{{heroname}} says the name {{mastername}}</p>
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
