import type { ProductsFilter } from '@/features/productsFilter/model/types.ts';
import { ProductFilters } from '@/features/productsFilter/ui/ProductsFilter.tsx';
import { useProductsFilters } from '@/features/productsFilter/model/useProductsFilters.ts';

export { ProductFilters, useProductsFilters };
export type { ProductsFilter };
