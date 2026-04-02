import type { StateSchema } from '@/app/store';

export const selectCartItemsSelector = (state: StateSchema) => state.cart.items;
