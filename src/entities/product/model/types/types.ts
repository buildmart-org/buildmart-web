import type { Category } from '@/entities/category';
import type { PaginationMeta } from '@/shared/api/types.ts';

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

export interface Products {
  data: Product[];
  meta: PaginationMeta;
}
