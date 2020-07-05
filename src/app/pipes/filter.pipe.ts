import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const resultFilter = [];
    for (const card of value) {
      console.log('valor:', value);
      if (
        card.name
          .toString()
          .toLowerCase()
          .indexOf(arg.toString().toLowerCase()) > -1
      ) {
        resultFilter.push(card);
      }
    }
    return resultFilter;
  }
}
