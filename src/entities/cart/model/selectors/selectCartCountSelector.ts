import type { StateSchema } from '@/app/store';

export const selectCartCount = (state: StateSchema) =>
  state.cart.items.reduce((acc, item) => acc + item.quantity, 0);
