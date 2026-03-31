import type { StateSchema } from '@/app/store';

export const selectCartSubtotalSelector = (state: StateSchema) =>
  state.cart.items;
