import { useEffect, useMemo, useState } from 'react';
import type { ProductsFilter } from '@/features/productsFilter';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { buildParams } from '@/features/productsFilter/lib/buildParams.ts';
import { parseFilters } from '@/features/productsFilter/lib/parseFilters.ts';
import { routePaths } from '@/shared/config';

export const useProductsFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const filters = useMemo(() => parseFilters(searchParams), [searchParams]);

  const [draftFilters, setDraftFilters] = useState<ProductsFilter>(filters);

  useEffect(() => {
    setDraftFilters(filters);
  }, [filters]);

  const [isOpen, setIsOpen] = useState(false);

  const applyFilters = (nextDraft: ProductsFilter) => {
    const params = new URLSearchParams(buildParams(nextDraft));

    navigate({
      pathname: routePaths.products,
      search: `?${params.toString()}`,
    });
  };

  const resetFilters = () => {
    setSearchParams({});
  };

  const toggleFilters = () => setIsOpen((prev) => !prev);

  return {
    filters,
    draftFilters,
    setDraftFilters,
    isOpen,
    toggleFilters,
    applyFilters,
    resetFilters,
  };
};
