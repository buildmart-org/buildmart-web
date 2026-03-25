import type { ServerResponse } from '@/shared/api/types.ts';

export const unwrap = <T>(response: ServerResponse<T>): T => response.data;
