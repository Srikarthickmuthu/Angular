import { Component, Input,Output} from "@angular/core";
@Component({
    selector:'app-dataParent',
    template:`<h3>{{title}}</h3>
    <app-dataChild [item]="itemDetail (newItemEvent)="addItem($event)"></app-dataChild>
    <ul>
  <li *ngFor="let item of items">{{item}}</li>
</ul>
    `
})
export class dataParent{
    title='Data sharing';
    itemDetail="Hello All";
    items = ['item1', 'item2', 'item3', 'item4'];

    addItem(newItem: string) {
      this.items.push(newItem);
    }
}
