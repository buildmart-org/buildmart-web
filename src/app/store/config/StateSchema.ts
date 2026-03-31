import { baseAPI } from '@/shared/api';
import type { CartSchema } from '@/entities/cart/model/types/CartSchema.ts';

export interface StateSchema {
  cart: CartSchema;
  [baseAPI.reducerPath]: ReturnType<typeof baseAPI.reducer>;
}
