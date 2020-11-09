import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filterBy: string): unknown {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? items.filter(item => item.name.toLocaleLowerCase().includes(filterBy)) : items;
  }

}
