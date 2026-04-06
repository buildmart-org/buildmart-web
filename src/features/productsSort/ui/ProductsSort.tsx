import { Select } from '@/shared/ui/Select';
import { sortOptions, type SortValueType } from '@/entities/product';
import styles from './ProductsSort.module.scss';

interface ProductsSortProps {
  sort: SortValueType;
  onSortChange: (value: SortValueType) => void;
}

export const ProductsSort = (props: ProductsSortProps) => {
  const { sort, onSortChange } = props;

  return (
    <div className={styles.wrapper}>
      <span>Sort by:</span>
      <Select value={sort} options={sortOptions} onChange={onSortChange} />
    </div>
  );
};
