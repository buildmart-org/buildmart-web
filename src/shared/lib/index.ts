import type { ApiDataError, RTKQueryError } from '@/shared/lib/errors/types.ts';
import { logger } from '@/shared/lib/logger/logger.ts';
import { extractErrorMessage } from '@/shared/lib/errors/extractErrorMessage.ts';
import { pluralizeProduct } from '@/shared/lib/utils/pluralizeProduct.ts';

export type { ApiDataError, RTKQueryError };
export { logger, extractErrorMessage, pluralizeProduct };
