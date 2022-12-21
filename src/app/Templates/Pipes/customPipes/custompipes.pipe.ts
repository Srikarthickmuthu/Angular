import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipes'
})
export class CustompipesPipe implements PipeTransform {

  transform(value: any) {
    let string=value;
    let output;
    return output=string.replace('&','and');
}
}
