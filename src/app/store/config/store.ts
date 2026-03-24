import {
  configureStore,
  type ThunkDispatch,
  type UnknownAction,
} from '@reduxjs/toolkit';

import type { StateSchema } from '@/app/store/config/StateSchema.ts';
import { baseAPI } from '@/shared/api';

export const createStore = (initialState?: StateSchema) => {
  return configureStore({
    preloadedState: initialState,
    reducer: {
      [baseAPI.reducerPath]: baseAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseAPI.middleware),
    devTools: true,
  });
};

export type AppDispatch = ThunkDispatch<StateSchema, unknown, UnknownAction>;
