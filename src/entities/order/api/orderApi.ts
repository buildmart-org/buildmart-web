import { baseAPI } from '@/shared/api';
import { unwrap } from '@/shared/lib/api/unwrap.ts';
import type { ApplyPromocode } from '@/entities/cart';
import type { ApplyPromocodeRequest } from '@/entities/order/model/types/types.ts';

export const orderApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    applyPromocode: builder.mutation<ApplyPromocode, ApplyPromocodeRequest>({
      query: (code) => ({
        url: `orders/apply-promocode`,
        method: 'POST',
        body: code,
      }),
      transformResponse: unwrap,
    }),
  }),
});

export const { useApplyPromocodeMutation } = orderApi;
