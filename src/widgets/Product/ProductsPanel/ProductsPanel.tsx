import { ProductFilters } from '@/features/productsFilter';
import type { SortValueType } from '@/entities/product';
import type { ProductsFilter } from '@/features/productsFilter';
import styles from './ProductsPanel.module.scss';
import { ProductsControls } from '@/widgets/Product';

interface ProductsPanelProps {
  total?: number;

  sortState: {
    sort: SortValueType;
    setSort: (sort: SortValueType) => void;
  };

  filtersState: {
    draftFilters: ProductsFilter;
    setDraftFilters: (filters: ProductsFilter) => void;
    applyFilters: (filters: ProductsFilter) => void;
    resetFilters: () => void;
    isOpen: boolean;
    toggle: () => void;
  };
}

export const ProductsPanel = ({
  total = 0,
  sortState,
  filtersState,
}: ProductsPanelProps) => {
  const { sort, setSort } = sortState;

  const {
    draftFilters,
    setDraftFilters,
    applyFilters,
    resetFilters,
    isOpen,
    toggle,
  } = filtersState;

  return (
    <div className={styles.panel}>
      <ProductsControls
        total={total}
        sort={sort}
        setSort={setSort}
        toggleFilters={toggle}
        isFiltersOpen={isOpen}
      />

      <ProductFilters
        draftFilters={draftFilters}
        setDraftFilters={setDraftFilters}
        applyFilters={applyFilters}
        resetFilters={resetFilters}
        isFiltersOpen={isOpen}
      />
    </div>
  );
};
