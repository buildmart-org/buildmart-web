import type { StateSchema } from '@/app/store';

export const selectItemsIdsSelector = (state: StateSchema) =>
  state.cart.items.map((item) => item.productId);
