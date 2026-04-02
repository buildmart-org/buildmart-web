import type { ApiDataError, RTKQueryError } from '@/shared/lib/errors/types.ts';
import { logger } from '@/shared/lib/logger/logger.ts';
import { extractErrorMessage } from '@/shared/lib/errors/extractErrorMessage.ts';
import { pluralizeProduct } from '@/shared/lib/utils/pluralizeProduct.ts';
import { formatQuery } from '@/shared/lib/api/formatQuery.ts';
import { formatCurrency } from '@/shared/lib/utils/formatPrice.ts';

export type { ApiDataError, RTKQueryError };
export {
  logger,
  extractErrorMessage,
  pluralizeProduct,
  formatQuery,
  formatCurrency,
};
