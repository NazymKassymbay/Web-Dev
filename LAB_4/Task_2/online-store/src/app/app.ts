import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from './components/product-list/product-list';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  selectedProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
    this.selectedProducts = this.productService.getProductsByCategory(categoryId);
  }

  onProductDeleted(productId: number): void {
    this.productService.deleteProduct(productId);
    if (this.selectedCategoryId) {
      this.selectedProducts = this.productService.getProductsByCategory(this.selectedCategoryId);
    }
  }
}