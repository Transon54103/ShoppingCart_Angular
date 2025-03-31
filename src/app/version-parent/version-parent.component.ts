import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HEROES } from '../version-child/hero';
import { VersionChildComponent } from '../version-child/version-child.component';
@Component({
  selector: 'app-version-parent',
  imports: [VersionChildComponent, CommonModule],
  standalone: true,
  templateUrl: './version-parent.component.html',
  styleUrl: './version-parent.component.css',
})
export class VersionParentComponent {
  heroes = HEROES;
  master = 'Văn Sơn';
}
