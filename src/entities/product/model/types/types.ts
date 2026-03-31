import type { Category } from '@/entities/category';
import type { PaginationMeta } from '@/shared/api/types.ts';
import { sortOptions } from '@/entities/product';
import type { File } from '@/entities/file';

export interface Attribute {
  id: string;
  key: string;
  value: string;
}

export interface Spec {
  id: string;
  key: string;
  value: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  priceOld: number | null;
  rating: number;
  category: Category;
  attributes: Attribute[];
  specs: Spec[];
  files: File[];
}

export interface Products {
  data: Product[];
  meta: PaginationMeta;
}

export type SortValueType = (typeof sortOptions)[number]['value'];
