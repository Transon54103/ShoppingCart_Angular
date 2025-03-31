import { NgFor } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Chuyeminhoa } from '../pipes/chuyenvietinhoa.pipe';
import { CurrencyPipe } from '../pipes/chuyentienviet.pipe';
import { FormsModule } from '@angular/forms';
import { ProductItems } from '../type/productItemType';
import { emit } from 'process';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CurrencyPipe,
    Chuyeminhoa,
    NgFor,
    RouterLink,
  ],
  templateUrl: './productItem.component.html',
  styleUrl: './productItem.component.css',
})
export class ProductItemCommponet {
  @Input() product: ProductItems[] = [];
  @Output() dataEvent = new EventEmitter<number>();
  handDelete = (id: number) => {
    // console.log(id);
    this.dataEvent.emit(id);
  };
  get totalprice(): string {
    const sum = this.product.reduce((total, item) => {
      return (total += item.price);
    }, 0);
    return `Tota Price ${sum}`;
  }
}
