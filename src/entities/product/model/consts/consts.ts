import type { SelectOption } from '@/shared/ui/Select';

export const sortOptions: SelectOption<string>[] = [
  { label: 'Name (A-Z)', value: 'title:asc' },
  { label: 'Name (Z-A)', value: 'title:desc' },
  { label: 'Price (low-high)', value: 'price:asc' },
  { label: 'Price (high-low)', value: 'price:desc' },
];

export const MAX_PRODUCT_QTY = 99;
