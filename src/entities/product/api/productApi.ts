import { baseAPI } from '@/shared/api';
import { unwrap } from '@/shared/lib/api/unwrap.ts';
import type {
  Product,
  Products,
} from '@/entities/product/model/types/types.ts';

export const productApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Products, void>({
      query: () => '/products',
      transformResponse: unwrap,
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `/products/${id}`,
      transformResponse: unwrap,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
