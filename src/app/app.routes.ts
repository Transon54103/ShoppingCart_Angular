import { Routes } from '@angular/router';
import path from 'node:path';
import { HomeCommponet } from './home/home.component';
import { DetailCommponet } from './detail/detail.component';
import { CreateCommponet } from './create/create.component';

export const routes: Routes = [
  { path: '', component: HomeCommponet },
  { path: 'detail/:id', component: DetailCommponet }, //không được '/detail/:id'
  { path: 'create', component: CreateCommponet },
];
