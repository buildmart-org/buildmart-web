import { useState } from 'react';
import type { ProductsFilter } from '@/features/productsFilter';

export const useProductsFilters = () => {
  const [filters, setFilters] = useState<ProductsFilter>({});
  const [draftFilters, setDraftFilters] = useState(filters);
  const [isOpen, setIsOpen] = useState(false);

  const applyFilters = () => {
    setFilters(draftFilters);
  };

  const resetFilters = () => {
    setFilters({});
    setDraftFilters({});
  };

  const toggleFilters = () => setIsOpen((prev) => !prev);

  return {
    filters,
    setFilters,
    draftFilters,
    setDraftFilters,
    isOpen,

    toggleFilters,
    applyFilters,
    resetFilters,
  };
};
