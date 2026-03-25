import { useGetCategoriesQuery } from '@/entities/category';
import { CategoryCard } from './CategoryCard';
import { ErrorBlock } from '@/shared/ui';
import styles from './CategoriesList.module.scss';
import { CategorySkeleton } from '@/entities/category/ui/CategorySkeleton.tsx';

export const CategoriesList = () => {
  const {
    data: categories,
    isLoading,
    isError,
    refetch,
  } = useGetCategoriesQuery();

  if (isLoading) {
    return (
      <div className={styles.grid}>
        {Array.from({ length: 8 }).map((_, i) => (
          <CategorySkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError)
    return <ErrorBlock title="Can't load categories" onRetry={refetch} />;

  return (
    <div className={styles.grid}>
      {categories?.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};
