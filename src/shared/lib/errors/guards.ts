import type { ApiDataError, RTKQueryError } from '@/shared/lib';

export const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null;
};

export const isRTKQueryError = (error: unknown): error is RTKQueryError => {
  return isObject(error) && 'status' in error;
};

export const isBackendErrorResponse = (data: unknown): data is ApiDataError => {
  if (!isObject(data)) return false;

  return 'message' in data || 'detail' in data;
};
