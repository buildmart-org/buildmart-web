import type { SelectOption } from '@/shared/ui/Select';
import type { Category } from '@/entities/category';

export const mapCategoryToOption = (
  category: Category,
): SelectOption<string> => ({
  label: category.title,
  value: category.id,
});
