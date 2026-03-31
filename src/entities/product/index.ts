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
import { ProductAttributes } from '@/entities/product/ui/ProductAttributes/ProductAttributes.tsx';
import { ProductsList } from '@/entities/product/ui/ProductList/ProductList.tsx';
import { ProductSpecs } from '@/entities/product/ui/ProductSpecs/ProductSpecs.tsx';
import { ProductGallery } from '@/entities/product/ui/ProductGallery/ProductGallery.tsx';
import { ProductCard } from '@/entities/product/ui/ProductCard/ProductCard.tsx';
import { validateQty } from '@/entities/product/lib/validateQty.ts';
import { validateRating } from '@/features/productsFilter';

export type { Product, Products, Attribute, Spec, SortValueType };
export {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetRelatedProductsQuery,
  sortOptions,
  ProductsList,
  ProductCard,
  ProductAttributes,
  ProductSpecs,
  ProductGallery,
  validateQty,
  validateRating,
};
