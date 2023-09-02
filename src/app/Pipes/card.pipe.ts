import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'card'
})
export class CardPipe implements PipeTransform {

  transform(value: string, args?: any): any {

    value=value.replace(/\s/g, '').replace(/\D/g, '#').trim()
    let number = []
    for (let i = 0; i < value.length ; i+=4) {
      
      number.push(value.substr(i,4))

    }
    return number.join(" ");
  }

}
