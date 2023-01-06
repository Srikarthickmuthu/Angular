import { Component, Input,Output,EventEmitter} from "@angular/core";
@Component({
    selector:'app-dataChild',
    template:`
    <h5>Child</h5>
    <p>A data from parent : {{item}}</p>
    <label for="item-input">Add an item:</label>
<input type="text" id="item-input" #newItem>
<button type="button" (click)="addNewItem(newItem.value)">Add to parent's list</button>
    `
})
export class dataChild{
    @Input() item='';
    @Output() newItemEvent=new EventEmitter<string>();
    addNewItem(value: string) {
        this.newItemEvent.emit(value);
      }
}
