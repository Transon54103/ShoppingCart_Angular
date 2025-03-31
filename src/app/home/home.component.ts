import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { VersionParentComponent } from '../version-parent/version-parent.component';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '../Shared/pipes/chuyentienviet.pipe';
import { Chuyeminhoa } from '../Shared/pipes/chuyenvietinhoa.pipe';
import { NgFor } from '@angular/common';
import { ProductItems } from '../Shared/type/productItemType';
import { ProductItemCommponet } from '../Shared/product-item/productItem.component';
import { HttpClient } from '@angular/common/http';
import { BlogService } from '../../../services/BlogService';
import { map, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, ProductItemCommponet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeCommponet implements OnInit {
  product: ProductItems[] = [
    // {
    //   id: 1,
    //   name: 'samba og',
    //   price: 1000000,
    //   immage: 'assets/images/OIP.jpg',
    // },
    // {
    //   id: 2,
    //   name: 'nike air',
    //   price: 2000000,
    //   immage: 'assets/images/OIP.jpg',
    // },
    // {
    //   id: 3,
    //   name: 'bitis',
    //   price: 3000000,
    //   immage: 'assets/images/OIP.jpg',
    // },
    // {
    //   id: 4,
    //   name: 'nike air max',
    //   price: 2500000,
    //   immage: 'assets/images/OIP.jpg',
    // },
  ];
  getBlogApi: Subscription;
  constructor(private blogService: BlogService) {
    this.getBlogApi = new Subscription();
  }
  ngOnInit(): void {
    this.getBlogApi = this.blogService
      .getBlogs()
      .pipe(
        map(({ data }) =>
          data.map((item: any) => ({
            ...item, // ✅ Giữ nguyên các thuộc tính gốc
            price: Number(item.body), // ✅ Chuyển `body` thành số
            name: item.title, // ✅ Gán `title` thành `name`
            immage: 'assets/images/OIP.jpg', // ✅ Sửa "immage" → "image"
          }))
        )
      )
      .subscribe((res) => {
        this.product = res; // ✅ Gán kết quả vào `this.product`
      });
  }

  handlDelete = (id: number) => {
    this.blogService.deleteBlog(id).subscribe(({ data }: any) => {
      if (data == 1) {
        this.product = this.product.filter((a) => a.id !== id);
      }
    });
  };
}
