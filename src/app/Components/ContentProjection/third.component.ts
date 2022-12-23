import { Component } from '@angular/core';

@Component({
  selector: 'app-third',
  template: `
    <h2>Content projection with ngProjectAs</h2>
    <ng-content select="[question]"></ng-content>
  `
})
export class third {}