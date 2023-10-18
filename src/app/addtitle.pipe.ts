import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addtitle'
})
export class AddtitlePipe implements PipeTransform {

  transform(value: string,price:number,taxs:number): string {
    return `product........${value}`;
  }

}
