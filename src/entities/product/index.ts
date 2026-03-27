import type {
  Product,
  Products,
} from '@/entities/product/model/types/types.ts';
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
} from '@/entities/product/api/productApi.ts';

export type { Product, Products };
export { useGetProductsQuery, useGetProductByIdQuery };
