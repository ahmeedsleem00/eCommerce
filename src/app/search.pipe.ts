import { Pipe, PipeTransform } from '@angular/core';
import { product } from './product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(productList: product[], searchVal: string): product[] {
    return productList.filter((el)=>el.title.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase()));
  }

}
