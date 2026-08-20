import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeatureComponent } from './components/feature/feature.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  imports: [
    RouterOutlet,
    NavbarComponent,
    SidebarComponent,
  HeroComponent,
  FeatureComponent,
  ProductsComponent,
  FooterComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('VentroEcommerceAngular');
}
