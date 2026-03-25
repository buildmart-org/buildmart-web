import { baseAPI } from '@/shared/api';
import { unwrap } from '@/shared/lib/api/unwrap.ts';
import type { CategoryWithDetails } from '@/entities/category/model/types/types.ts';

export const categoryApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<CategoryWithDetails[], void>({
      query: () => '/categories',
      transformResponse: unwrap,
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
