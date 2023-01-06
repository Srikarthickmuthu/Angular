import { Component} from "@angular/core";

@Component({
    selector:'app-dataParent',
    template:`<h3>{{title}}</h3>
    <app-dataChild [item]="itemDetail" (newItemEvent)="addItem($event)"></app-dataChild>
    <ul>
    <h5>parent</h5>
  <li *ngFor="let item of items">{{item}}</li>
</ul>
    `
})
export class dataParent{
    title='Data sharing';
    itemDetail="Hello All";
    items = [''];

    addItem(newItem: string) {
      this.items.push(newItem);
    }
}
