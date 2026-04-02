import type {
  Attribute,
  Product,
  Spec,
  Products,
  SortValueType,
} from '@/entities/product/model/types/types.ts';
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
  useGetRelatedProductsQuery,
} from '@/entities/product/api/productApi.ts';
import { sortOptions } from '@/entities/product/model/consts/consts.ts';
import { ProductsList } from '@/entities/product/ui/ProductList/ProductList.tsx';
import { ProductCard } from '@/entities/product/ui/ProductCard/ProductCard.tsx';
import { validateQty } from '@/entities/product/lib/validateQty.ts';
import { validateRating } from '@/features/productsFilter';
import { ProductsSkeleton } from '@/entities/product/ui/ProductsSkeleton/ProductsSkeleton.tsx';
import { ProductPageSkeleton } from '@/entities/product/ui/ProductPageSkeleton/ProductPageSkeleton.tsx';

export type { Product, Products, Attribute, Spec, SortValueType };
export {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetRelatedProductsQuery,
  sortOptions,
  ProductsList,
  ProductCard,
  validateQty,
  validateRating,
  ProductPageSkeleton,
  ProductsSkeleton,
};
