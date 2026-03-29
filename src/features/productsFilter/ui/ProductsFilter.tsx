import styles from './ProductsFilter.module.scss';
import { Button, Input } from '@/shared/ui';
import type { ProductsFilter } from '@/features/productsFilter';
import {
  mapCategoryToOption,
  useGetCategoriesQuery,
} from '@/entities/category';
import { Select } from '@/shared/ui/Select';
import { useEffect, useMemo } from 'react';

interface ProductFiltersProps {
  draftFilters: ProductsFilter;
  setDraftFilters: (filters: ProductsFilter) => void;
  applyFilters: () => void;
  resetFilters: () => void;
  isFiltersOpen: boolean;
}

export const ProductFilters = (props: ProductFiltersProps) => {
  const {
    draftFilters,
    setDraftFilters,
    resetFilters,
    applyFilters,
    isFiltersOpen,
  } = props;

  useEffect(() => {
    console.log('draftFilters changed:', draftFilters);
  }, [draftFilters]);

  const { data: categories } = useGetCategoriesQuery();

  const categoryOptions = useMemo(() => {
    return (categories ?? []).map(mapCategoryToOption);
  }, [categories]);

  if (!isFiltersOpen) return null;

  return (
    <div className={styles.wrapper}>
      {/* Rating */}
      <div className={styles.section}>
        <span className={styles.title}>Minimum Rating</span>
        <Input
          type="number"
          placeholder="From"
          value={draftFilters.rating?.toString() ?? ''}
          onChange={(value) =>
            setDraftFilters({
              ...draftFilters,
              rating: value ? Number(value) : undefined,
            })
          }
        />
      </div>

      {/* Price */}
      <div className={styles.section}>
        <span className={styles.title}>Price Range</span>

        <div className={styles.inputs}>
          <Input
            type={'number'}
            placeholder="From"
            value={draftFilters.priceFrom?.toString() ?? ''}
            onChange={(value) =>
              setDraftFilters({
                ...draftFilters,
                priceFrom: Number(value) || undefined,
              })
            }
          />

          <Input
            type={'number'}
            placeholder="To"
            value={draftFilters.priceTo?.toString() ?? ''}
            onChange={(value) =>
              setDraftFilters({
                ...draftFilters,
                priceTo: Number(value) || undefined,
              })
            }
          />
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.title}>Category</span>
        <Select
          value={draftFilters.category ?? ''}
          placeholder={'Select'}
          options={categoryOptions}
          onChange={(value) =>
            setDraftFilters({
              ...draftFilters,
              category: value || undefined,
            })
          }
        />
      </div>

      {/* Actions */}
      <div className={styles.actions}>
        <Button theme="primary-outline" size="md" onClick={resetFilters}>
          Clear All Filters
        </Button>
        <Button theme="primary" size="md" onClick={applyFilters}>
          Apply Filters
        </Button>
      </div>
    </div>
  );
};
