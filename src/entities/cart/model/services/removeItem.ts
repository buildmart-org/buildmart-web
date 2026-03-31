import type { CartSchema } from '@/entities/cart/model/types/CartSchema.ts';

export const removeItemById = (state: CartSchema, productId: string) => {
  state.items = state.items.filter((i) => i.productId !== productId);
};
