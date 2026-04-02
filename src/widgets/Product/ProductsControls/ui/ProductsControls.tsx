import styles from './ProductsControls.module.scss';
import { Button } from '@/shared/ui';
import FilterIcon from '@/shared/assets/icons/Filter.svg?react';
import { ProductsSort } from '@/features/productsSort/ui/ProductsSort.tsx';
import type { SortValueType } from '@/entities/product';

interface ProductsPanelProps {
  total?: number;
  sort: SortValueType;
  setSort: (sort: SortValueType) => void;
  toggleFilters: () => void;
  isFiltersOpen: boolean;
}

export const ProductsControls = (props: ProductsPanelProps) => {
  const { sort, setSort, total, isFiltersOpen, toggleFilters } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.filtersShow}>
        <Button
          Icon={<FilterIcon />}
          size={'lg'}
          theme={'secondary-outline'}
          onClick={toggleFilters}
        >
          {isFiltersOpen ? 'Hide filters' : 'Show filters'}
        </Button>
        <span>Showing {total} products</span>
      </div>
      <div className={styles.sort}>
        <ProductsSort sort={sort} onSortChange={setSort} />
      </div>
    </div>
  );
};
