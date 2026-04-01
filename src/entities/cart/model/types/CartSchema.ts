import type { Product } from '@/entities/product';

export interface Cart {
  productId: string;
  quantity: number;
}

export interface CartDetailedItem {
  product: Product;
  quantity: number;
  total: number;
}

export interface CartSchema {
  items: Cart[];
}
