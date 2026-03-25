import { baseAPI } from '@/shared/api';
import { unwrap } from '@/shared/lib/api/unwrap.ts';
import type { Deal } from '@/entities/deal/model/types/types.ts';

export const dealApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getDeals: builder.query<Deal[], void>({
      query: () => '/deals',
      transformResponse: unwrap,
    }),
  }),
});

export const { useGetDealsQuery } = dealApi;
