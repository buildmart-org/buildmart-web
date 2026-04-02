import { MAX_PRODUCT_QTY } from '@/entities/cart';

export const validateQty = (
  value: string | number | undefined,
): number | undefined => {
  if (value === '' || value === undefined || value === null) {
    return undefined;
  }

  const num = Number(value);

  if (!isNaN(num) && num > 0 && num <= MAX_PRODUCT_QTY) {
    return num;
  }

  return undefined;
};
