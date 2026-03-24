import { isRejectedWithValue, type Middleware } from '@reduxjs/toolkit';
import { extractErrorMessage, logger } from '@/shared/lib';

export const errorMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const error = action.payload as unknown;
    const message = extractErrorMessage(error);

    logger.error({
      scope: 'API',
      message,
      error,
      meta: {
        type: action.type,
      },
    });
  }

  return next(action);
};
