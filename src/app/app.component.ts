import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './Shared/header-layout/header-layout.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from './Shared/pipes/chuyentienviet.pipe';
import { Chuyeminhoa } from './Shared/pipes/chuyenvietinhoa.pipe';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-basic-project';
}
