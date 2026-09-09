import { Component } from '@angular/core';
import { sellingProducts } from './selling.data';


@Component({
  imports: [],
  selector: 'app-sellings',
  styleUrl: './sellings.css',
  templateUrl: './sellings.html',
})
export class Sellings {

  protected readonly sellingProducts = sellingProducts;
}
