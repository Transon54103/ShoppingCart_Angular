import { Component, Input, output } from '@angular/core';
import { Hero, HEROES } from './hero';
@Component({
  selector: 'app-version-child',
  imports: [],
  standalone: true,
  templateUrl: './version-child.component.html',
  styleUrl: './version-child.component.css',
})
export class VersionChildComponent {
  @Input() hero!: Hero;
  @Input('master') masterName = '';
}
