import { isRejectedWithValue, type Middleware } from '@reduxjs/toolkit';
import { extractErrorMessage } from '@/shared/lib/errors/extractErrorMessage';

export const errorMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const message = extractErrorMessage(action.payload);

    console.error(`ERROR: ${message}`);
  }

  return next(action);
};
