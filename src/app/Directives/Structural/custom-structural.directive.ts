import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appCustomStructural]'
})
export class CustomStructuralDirective {
  show=false;
  constructor() {
    setTimeout(() => {
      this.show=true;
    },3000);
   }
}
