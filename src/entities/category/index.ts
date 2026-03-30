import type { Category } from '@/entities/category/model/types/types.ts';
import {
  useGetCategoriesQuery,
  useGetFlatCategoriesQuery,
} from '@/entities/category/api/categoryApi.ts';
import { CategoriesList } from '@/entities/category/ui/CategoriesList/CategoriesList.tsx';
import { mapCategoryToOption } from '@/entities/category/lib/mapCategoryToOption.ts';

export {
  useGetCategoriesQuery,
  useGetFlatCategoriesQuery,
  CategoriesList,
  mapCategoryToOption,
};
export type { Category };
