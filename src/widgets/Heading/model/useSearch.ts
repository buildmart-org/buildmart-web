import { useProductsFilters } from '@/features/productsFilter';

export const useSearch = () => {
  const { draftFilters, setDraftFilters, applyFilters } = useProductsFilters();

  const search = draftFilters.search ?? '';

  const setSearch = (value: string) => {
    setDraftFilters((prev) => ({
      ...prev,
      search: value || undefined,
    }));
  };

  const onEnter = () => {
    applyFilters({
      ...draftFilters,
    });
  };

  return {
    search,
    setSearch,
    onEnter,
  };
};
