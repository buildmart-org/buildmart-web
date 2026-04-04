import type { CartSchema } from '@/entities/cart/model/types/CartSchema.ts';
import { LOCAL_STORAGE_CART_KEY } from '@/shared/config';
import { logger } from '@/shared/lib';

const initialState = { items: [], promocode: null };

export const loadCart = (): CartSchema => {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_CART_KEY);
    return data ? JSON.parse(data) : initialState;
  } catch (error) {
    logger.error({
      scope: 'cart',
      message: 'Could not parse cart data from localstorage',
      error: error,
    });
    return initialState;
  }
};
