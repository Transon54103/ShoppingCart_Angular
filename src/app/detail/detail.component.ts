import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { VersionParentComponent } from '../version-parent/version-parent.component';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '../Shared/pipes/chuyentienviet.pipe';
import { Chuyeminhoa } from '../Shared/pipes/chuyenvietinhoa.pipe';
import { NgFor } from '@angular/common';
import { ProductItems } from '../Shared/type/productItemType';
import { BlogService } from '../../../services/BlogService';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailCommponet implements OnInit {
  id = '';
  productItem: ProductItems = {
    id: 0,
    immage: '',
    name: '',
    price: 0,
  };

  constructor(private route: ActivatedRoute, private blogservice: BlogService) {
    this.id = String(route.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.blogservice
      .detailBlog(+this.id)
      .subscribe(({ data, message }: any) => {
        console.log(data);
        console.log(message);
        this.productItem.id = data.id;
        this.productItem.name = data.title;
        this.productItem.price = data.body;
      });
    console.log(this.productItem);
  }
}
