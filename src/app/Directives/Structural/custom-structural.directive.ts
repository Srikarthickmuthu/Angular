import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appCustomStructural]'
})
export class CustomStructuralDirective {
  show=true;
  constructor() {
    setTimeout(() => {
      this.show=true;
    },3000);
   }
}
