import type {
  Product,
  Products,
  SortValueType,
} from '@/entities/product/model/types/types.ts';
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
} from '@/entities/product/api/productApi.ts';
import { sortOptions } from '@/entities/product/model/consts/consts.ts';

export type { Product, Products, SortValueType };
export { useGetProductsQuery, useGetProductByIdQuery, sortOptions };
