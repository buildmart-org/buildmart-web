import { baseAPI } from '@/shared/api';
import { unwrap } from '@/shared/lib/api/unwrap.ts';
import type {
  Product,
  Products,
  SortValueType,
} from '@/entities/product/model/types/types.ts';
import type { ProductsFilter } from '@/features/productsFilter';

export type getProductsParamsType = {
  sort?: SortValueType;
} & Partial<ProductsFilter>;

export const productApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Products, getProductsParamsType>({
      query: (params) => ({
        url: '/products',
        params,
      }),
      transformResponse: unwrap,
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `/products/${id}`,
      transformResponse: unwrap,
    }),
    getRelatedProducts: builder.query<Product, string>({
      query: (id) => `/products/${id}/related`,
      transformResponse: unwrap,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
