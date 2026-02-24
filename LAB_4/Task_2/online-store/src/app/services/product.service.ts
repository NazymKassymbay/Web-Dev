import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
providedIn: 'root'
})
export class ProductService {

categories: Category[] = [
{ id: 1, name: 'Laptops & Computers' },
{ id: 2, name: 'Smartphones & Tablets' },
{ id: 3, name: 'Audio & Headphones' },
{ id: 4, name: 'Gaming & Electronics' }
];

products: Product[] = [

{
id: 1,
name: 'Laptop ASUS',
description: 'Powerful modern laptop',
price: 1200,
rating: 4.5,
image: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400'],
link: 'https://kaspi.kz',
likes: 0,
categoryId: 1
},

{
id: 2,
name: 'External Hard Drive',
description: 'Fast external storage',
price: 100,
rating: 4.3,
image: ['https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=400'],
link: 'https://kaspi.kz',
likes: 0,
categoryId: 1
},

{
id: 3,
name: 'Wireless Mouse',
description: 'Ergonomic mouse',
price: 50,
rating: 4.4,
image: ['https://images.unsplash.com/photo-1527814050087-3793815479db?w=400'],
link: 'https://kaspi.kz',
likes: 0,
categoryId: 1
},

{
id: 4,
name: 'Keyboard',
description: 'Gaming keyboard',
price: 80,
rating: 4.6,
image: ['https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400'],
link: 'https://kaspi.kz',
likes: 0,
categoryId: 1
},

{
id: 5,
name: 'USB Hub',
description: 'Multi USB hub',
price: 40,
rating: 4.2,
image: ['https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400'],
link: 'https://kaspi.kz',
likes: 0,
categoryId: 1
},

{
id: 6,
name: 'iPhone',
description: 'Apple smartphone',
price: 900,
rating: 4.8,
image: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400'],
link: 'https://kaspi.kz',
likes: 0,
categoryId: 2
},

{
id: 7,
name: 'Tablet Samsung',
description: 'Android tablet',
price: 500,
rating: 4.5,
image: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400'],
link: 'https://kaspi.kz',
likes: 0,
categoryId: 2
},

{
id: 8,
name: 'Smart Watch',
description: 'Fitness watch',
price: 250,
rating: 4.6,
image: ['https://images.unsplash.com/photo-1510017803434-a899398421b3?w=400'],
link: 'https://kaspi.kz',
likes: 0,
categoryId: 2
},

{
id: 9,
name: 'Headphones',
description: 'Noise cancelling',
price: 200,
rating: 4.7,
image: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400'],
link: 'https://kaspi.kz',
likes: 0,
categoryId: 3
},

{
id: 10,
name: 'Speaker',
description: 'Bluetooth speaker',
price: 150,
rating: 4.5,
image: ['https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400'],
link: 'https://kaspi.kz',
likes: 0,
categoryId: 3
},

{
id: 11,
name: 'Earbuds',
description: 'Wireless earbuds',
price: 120,
rating: 4.4,
image: ['https://images.unsplash.com/photo-1588421357937-9bcf7d7c5c1e?w=400'],
link: 'https://kaspi.kz',
likes: 0,
categoryId: 3
},

{
id: 12,
name: 'Microphone',
description: 'Studio mic',
price: 90,
rating: 4.6,
image: ['https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400'],
link: 'https://kaspi.kz',
likes: 0,
categoryId: 3
},

{
id: 13,
name: 'PlayStation 5',
description: 'Gaming console',
price: 500,
rating: 4.9,
image: ['https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400'],
link: 'https://kaspi.kz',
likes: 0,
categoryId: 4
},

{
id: 14,
name: 'Camera',
description: 'Professional camera',
price: 800,
rating: 4.7,
image: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400'],
link: 'https://kaspi.kz',
likes: 0,
categoryId: 4
},

{
id: 15,
name: 'Gaming Mouse',
description: 'RGB gaming mouse',
price: 70,
rating: 4.6,
image: ['https://images.unsplash.com/photo-1563297007-0686b7003af7?w=400'],
link: 'https://kaspi.kz',
likes: 0,
categoryId: 4
}



];

getCategories() {
return this.categories;
}

getProductsByCategory(categoryId: number) {
return this.products.filter(p => p.categoryId === categoryId);
}

deleteProduct(id: number) {
this.products = this.products.filter(p => p.id !== id);
}

incrementLikes(id: number) {
const product = this.products.find(p => p.id === id);
if (product) product.likes++;
}

}
