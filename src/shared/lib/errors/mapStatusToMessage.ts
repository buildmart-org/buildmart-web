export const mapStatusToMessage = (status: number): string => {
  const map: Record<number, string> = {
    400: 'Invalid request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Resource not found',
    409: 'Conflict',
    500: 'Internal server error',
  };

  return map[status] ?? 'Something went wrong';
};
