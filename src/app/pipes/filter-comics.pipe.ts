import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterComics',
})
export class FilterComicsPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const resultFilter = [];
    for (const card of value) {
      if (
        card.title
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
