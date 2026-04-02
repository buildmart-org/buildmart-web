import type { StateSchema } from './config/StateSchema.ts';
import { createStore, type AppDispatch } from './config/store.ts';
import { errorMiddleware } from '@/app/store/middlewares/errorMiddleware.ts';

export type { StateSchema, AppDispatch };
export { createStore, errorMiddleware };
