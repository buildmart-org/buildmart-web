import type { StateSchema } from '@/app/store';
import { createSelector } from '@reduxjs/toolkit';

const selectCartItems = (state: StateSchema) => state.cart.items;

export const selectItemsIdsSelector = createSelector(
  [selectCartItems],
  (items) => items.map((item) => item.productId),
);
