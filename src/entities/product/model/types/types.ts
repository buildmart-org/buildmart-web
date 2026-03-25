import type { Category } from '@/entities/category';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  priceOld: number | null;
  rating: number;
  category: Category;
  file: string;
}
