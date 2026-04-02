import { isRTKQueryError, isBackendErrorResponse } from './guards';
import { mapStatusToMessage } from './mapStatusToMessage';

export const extractErrorMessage = (error: unknown): string => {
  // RTK Query error
  if (isRTKQueryError(error)) {
    // network error
    if (error.status === 'FETCH_ERROR') {
      return 'Network error. Please check your connection.';
    }

    // backend data
    if (error.data && isBackendErrorResponse(error.data)) {
      const { message, detail } = error.data;

      if (typeof detail === 'string' && detail.length > 0) {
        return detail;
      }

      if (typeof message === 'string' && message.length > 0) {
        return message;
      }
    }

    // fallback
    if (typeof error.status === 'number') {
      return mapStatusToMessage(error.status);
    }
  }

  // error
  if (error instanceof Error && error.message) {
    return error.message;
  }

  return 'Unknown error';
};
