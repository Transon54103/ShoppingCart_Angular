import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chuyeninhoa',
  standalone: true,
})
export class Chuyeminhoa implements PipeTransform {
  transform(value: string) {
    return value.toUpperCase();
  }
}
