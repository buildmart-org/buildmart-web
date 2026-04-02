import {
  configureStore,
  type ThunkDispatch,
  type UnknownAction,
} from '@reduxjs/toolkit';

import type { StateSchema } from '@/app/store/config/StateSchema.ts';
import { baseAPI } from '@/shared/api';
import { errorMiddleware } from '@/app/store/middlewares/errorMiddleware.ts';
import { cartReducer } from '@/entities/cart/model/slice/cartSlice.ts';
import { loadCart } from '@/entities/cart/model/services/loadCart.ts';

export const createStore = () => {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
      [baseAPI.reducerPath]: baseAPI.reducer,
    },
    preloadedState: {
      cart: loadCart(),
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseAPI.middleware).concat(errorMiddleware),
  });

  store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('cart', JSON.stringify(state.cart));
  });

  return store;
};

export type AppDispatch = ThunkDispatch<StateSchema, unknown, UnknownAction>;
