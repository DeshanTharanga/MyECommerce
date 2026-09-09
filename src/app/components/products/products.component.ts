import { Component } from '@angular/core';
import { categories } from '../sidebar/sidebar.data';
import { products } from './products.data';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  imports: [],
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  protected readonly categories = categories;
   products = products;
}
