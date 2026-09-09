import { Component } from '@angular/core';
import { categories } from './category.data';

@Component({
  imports: [],
  selector: 'app-category',
  styleUrl: './category.css',
  templateUrl: './category.html',
})
export class Category {
  protected readonly categories = categories;
}
