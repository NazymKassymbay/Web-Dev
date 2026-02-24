import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCard],
  standalone: true,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})

export class ProductList {
  products = input.required<Product[]>();
  delete = output<number>();

  onDelete(productId: number): void {
    this.delete.emit(productId);
  }
}