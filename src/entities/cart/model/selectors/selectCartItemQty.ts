import type { StateSchema } from '@/app/store';

export const selectCartItemQty = (id: string) => (state: StateSchema) =>
  state.cart.items.find((item) => item.productId === id)?.quantity ?? null;
