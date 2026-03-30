import type { ProductsFilter } from '@/features/productsFilter';

export const parseFilters = (params: URLSearchParams): ProductsFilter => {
  const category = params.get('category') ?? undefined;

  const priceFromRaw = params.get('priceFrom');
  const priceFrom =
    priceFromRaw !== null && !isNaN(Number(priceFromRaw))
      ? Number(priceFromRaw)
      : undefined;

  const priceToRaw = params.get('priceTo');
  const priceTo =
    priceToRaw !== null && !isNaN(Number(priceToRaw))
      ? Number(priceToRaw)
      : undefined;

  const ratingRaw = params.get('rating');
  const rating =
    ratingRaw !== null && !isNaN(Number(ratingRaw))
      ? Number(ratingRaw)
      : undefined;

  return {
    category,
    priceFrom,
    priceTo,
    rating,
  };
};
