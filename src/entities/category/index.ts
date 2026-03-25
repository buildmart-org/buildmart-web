import type { Category } from '@/entities/category/model/types/types.ts';
import { useGetCategoriesQuery } from '@/entities/category/api/categoryApi.ts';
import { CategoriesList } from '@/entities/category/ui/CategoriesList/CategoriesList.tsx';

export { useGetCategoriesQuery, CategoriesList };
export type { Category };
