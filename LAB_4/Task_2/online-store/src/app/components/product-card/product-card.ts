import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})

export class ProductCard {
  product = input.required<Product>();
  delete = output<number>();

  constructor(private productService: ProductService) {}

  like(): void {
    this.productService.incrementLikes(this.product().id);
  }

  deleteProduct(): void {
    this.delete.emit(this.product().id);
  }

  shareWhatsapp(): void {
    const url = encodeURIComponent(`check out this product ${this.product().link}`);
    window.open(`https://api.whatsapp.com/send?text=${url}`, '_blank');
  }

  shareTelegram(): void {
    const url = encodeURIComponent(`check out this product ${this.product().link}`);
    window.open(`https://t.me/share/url?url=${url}`, '_blank');
  }
}