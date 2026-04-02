import { isRejectedWithValue, type Middleware } from '@reduxjs/toolkit';
import { extractErrorMessage, logger } from '@/shared/lib';
import { showToast } from '@/shared/ui/Toast/lib/toastService.ts';
import { ToastVariant } from '@/shared/ui';

export const errorMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const error = action.payload as unknown;
    const message = extractErrorMessage(error);

    // toast
    showToast(message, ToastVariant.error);

    // log
    logger.error({
      scope: 'API',
      message,
      error,
      meta: { type: action.type },
    });
  }

  return next(action);
};
