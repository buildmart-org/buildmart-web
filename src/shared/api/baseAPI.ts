import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { env } from '@/shared/config';

const baseQuery = fetchBaseQuery({
  baseUrl: env.API_URL,
});

export const baseAPI = createApi({
  baseQuery: baseQuery,
  reducerPath: 'api',
  endpoints: () => ({}),
});
