import { isRejectedWithValue, type Middleware } from '@reduxjs/toolkit';
import { extractErrorMessage, logger } from '@/shared/lib';
import { useToast } from '@/shared/config';

export const errorMiddleware: Middleware = () => (next) => (action) => {
  const { open } = useToast();

  if (isRejectedWithValue(action)) {
    const error = action.payload as unknown;
    const message = extractErrorMessage(error);

    // toast
    open(message);

    // log
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
