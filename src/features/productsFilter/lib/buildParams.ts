import type {
  ProductsFilter,
  RawSearchParams,
} from '@/features/productsFilter';

export const buildParams = (filters: ProductsFilter) => {
  const params: RawSearchParams = {};

  if (filters.category) {
    params.category = filters.category;
  }

  if (filters.priceFrom !== undefined) {
    params.priceFrom = String(filters.priceFrom);
  }

  if (filters.priceTo !== undefined) {
    params.priceTo = String(filters.priceTo);
  }

  if (filters.rating !== undefined) {
    params.rating = String(filters.rating);
  }

  return params;
};
