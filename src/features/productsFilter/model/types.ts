export interface ProductsFilter {
  priceFrom?: number;
  priceTo?: number;
  rating?: number;
  category?: string;
  search?: string;
}

export type RawSearchParams = Record<string, string>;
