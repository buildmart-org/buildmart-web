import { createSelector } from '@reduxjs/toolkit';
import { selectCartPromocodeSelector } from './selectCartPromocodeSelector';
import type { CartDetailedItem } from '../types/CartSchema';
import type { StateSchema } from '@/app/store';

export const selectCartSummarySelector = createSelector(
  [
    (_: StateSchema, cart: CartDetailedItem[]) => cart,
    selectCartPromocodeSelector,
  ],
  (cart, promo) => {
    const subtotal = cart.reduce((acc, item) => acc + item.total, 0);

    const tax = subtotal * 0.08; // Constant tax 8%

    let discount = 0;

    if (promo) {
      discount = subtotal * (promo.discount / 100);
    }

    const total = subtotal + tax - discount;

    return {
      subtotal,
      tax,
      discount,
      total,
    };
  },
);
