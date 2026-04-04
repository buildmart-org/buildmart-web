import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {
  ApplyPromocode,
  CartSchema,
} from '@/entities/cart/model/types/CartSchema.ts';
import { MAX_PRODUCT_QTY } from '@/entities/cart';
import { removeItemById } from '@/entities/cart/model/services/removeItem.ts';

const initialState: CartSchema = {
  items: [],
  promocode: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addItem: (
      state,
      action: PayloadAction<{ productId: string; amount: number }>,
    ) => {
      const amountAdd = action.payload.amount ?? 1;
      const existing = state.items.find(
        (item) => item.productId === action.payload.productId,
      );

      if (existing) {
        existing.quantity += amountAdd;
      } else {
        state.items.push({
          productId: action.payload.productId,
          quantity: amountAdd,
        });
      }
    },
    removeItem: (state, action: PayloadAction<{ productId: string }>) => {
      removeItemById(state, action.payload.productId);
    },
    setQuantity: (
      state,
      action: PayloadAction<{ productId: string; quantity: number }>,
    ) => {
      const item = state.items.find(
        (i) => i.productId === action.payload.productId,
      );

      if (!item) return;

      if (action.payload.quantity <= 0) {
        state.items = state.items.filter(
          (i) => i.productId !== action.payload.productId,
        );
        return;
      }

      item.quantity = Math.min(action.payload.quantity, MAX_PRODUCT_QTY);
    },
    changeQuantity: (
      state,
      action: PayloadAction<{ productId: string; delta: number }>,
    ) => {
      const item = state.items.find(
        (i) => i.productId === action.payload.productId,
      );

      if (!item) return;

      const nextQuantity = item.quantity + action.payload.delta;

      if (nextQuantity <= 0) {
        removeItemById(state, action.payload.productId);
        return;
      }

      item.quantity = Math.min(nextQuantity, MAX_PRODUCT_QTY);
    },
    setPromocode(state, action: PayloadAction<ApplyPromocode | null>) {
      state.promocode = action.payload;
    },
    clearPromocode(state) {
      state.promocode = null;
    },
  },
});

export const { actions: cartActions } = cartSlice;
export const { reducer: cartReducer } = cartSlice;
