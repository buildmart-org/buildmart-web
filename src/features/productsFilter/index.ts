import type { ProductsFilter } from '@/features/productsFilter/model/types.ts';
import { ProductFilters } from '@/features/productsFilter/ui/ProductsFilter.tsx';
import { useProductsFilters } from '@/features/productsFilter/model/useProductsFilters.ts';
import { validateRating } from '@/features/productsFilter/lib/validateRating.ts';

export { ProductFilters, useProductsFilters, validateRating };
export type { ProductsFilter };
