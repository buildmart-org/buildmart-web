import { baseAPI } from '@/shared/api';

export interface StateSchema {
  [baseAPI.reducerPath]: ReturnType<typeof baseAPI.reducer>;
}
