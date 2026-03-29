import { Select } from '@/shared/ui/Select';
import { sortOptions, type SortValueType } from '@/entities/product';

interface ProductsSortProps {
  sort: SortValueType;
  onSortChange: (value: SortValueType) => void;
}

export const ProductsSort = (props: ProductsSortProps) => {
  const { sort, onSortChange } = props;

  return (
    <>
      <span>Sort by:</span>
      <Select value={sort} options={sortOptions} onChange={onSortChange} />
    </>
  );
};
