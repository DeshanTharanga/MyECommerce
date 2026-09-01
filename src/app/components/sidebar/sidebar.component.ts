import { Component } from '@angular/core';
import { categories } from './sidebar.data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  protected readonly categories = categories;
}
