import type { Product } from '@/entities/product';

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface CartDetailedItem {
  product: Product;
  quantity: number;
  total: number;
}

export interface ApplyPromocode {
  promocode: string;
  discount: number; // percent
  isActive: boolean;
}

export interface CartSchema {
  items: CartItem[];
  promocode: ApplyPromocode | null;
}
