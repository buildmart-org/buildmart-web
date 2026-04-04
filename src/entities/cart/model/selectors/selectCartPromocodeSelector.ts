import type { StateSchema } from '@/app/store';

export const selectCartPromocodeSelector = (state: StateSchema) =>
  state.cart.promocode;
