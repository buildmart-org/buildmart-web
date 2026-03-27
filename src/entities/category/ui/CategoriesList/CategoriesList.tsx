import { useGetCategoriesQuery } from '@/entities/category';
import { CategoryCard } from '../CategoryCard/CategoryCard.tsx';
import { ErrorBlock } from '@/shared/ui';
import { CategoriesSkeleton } from '@/entities/category/ui/CategoriesSkeleton/CategoriesSkeleton.tsx';

export const CategoriesList = () => {
  const {
    data: categories,
    isLoading,
    isError,
    refetch,
  } = useGetCategoriesQuery();

  if (isError)
    return <ErrorBlock title="Can't load categories" onRetry={refetch} />;

  if (isLoading) {
    return <CategoriesSkeleton length={6} />;
  }

  return categories?.map((category) => (
    <CategoryCard key={category.id} category={category} />
  ));
};
