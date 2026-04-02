import { baseAPI } from '@/shared/api';
import { unwrap } from '@/shared/lib/api/unwrap.ts';
import type {
  Category,
  CategoryWithDetails,
} from '@/entities/category/model/types/types.ts';

export const categoryApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<CategoryWithDetails[], void>({
      query: () => '/categories',
      transformResponse: unwrap,
    }),
    getFlatCategories: builder.query<Category[], void>({
      query: () => '/categories/flat',
      transformResponse: unwrap,
    }),
  }),
});

export const { useGetCategoriesQuery, useGetFlatCategoriesQuery } = categoryApi;
