import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { VersionParentComponent } from '../version-parent/version-parent.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CurrencyPipe } from '../Shared/pipes/chuyentienviet.pipe';
import { Chuyeminhoa } from '../Shared/pipes/chuyenvietinhoa.pipe';
import { NgFor, NgIf } from '@angular/common';
import { BlogItem, ProductItems } from '../Shared/type/productItemType';
import { BlogService } from '../../../services/BlogService';
import { randomFill } from 'crypto';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateCommponet {
  product = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });
  get name() {
    return this.product.get('name');
  }
  get price() {
    return this.product.get('price');
  }
  productItem: ProductItems = {
    id: 0,
    immage: '',
    name: '',
    price: 0,
  };
  constructor(private blogservice: BlogService, private router: Router) {}
  handleAddCart() {
    if (this.name?.hasError('required') || this.price?.hasError('required'))
      return;
    const blogItem: BlogItem = {
      id: Math.random(),
      title: String(this.name?.value),
      body: String(this.price?.value),
      author: 'haha',
    };
    this.blogservice.postBlog(blogItem).subscribe(({ data }: any) => {
      if (data.id) {
        this.router.navigate(['/']);
      }
    });
  }
}
