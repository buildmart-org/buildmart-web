import { useState } from 'react';
import type { SortValueType } from '@/entities/product';

export const useProductsSort = () => {
  const [sort, setSort] = useState<SortValueType>('title:asc');

  return {
    sort,
    setSort,
  };
};
