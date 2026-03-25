import { useGetCategoriesQuery } from '@/entities/category';
import { CategoryCard } from './CategoryCard';
import { Button } from '@/shared/ui';
import styles from './CategoriesList.module.scss';
import { CategorySkeleton } from '@/entities/category/ui/CategorySkeleton.tsx';

export const CategoriesList = () => {
  const {
    data: categories,
    isLoading,
    isError,
    refetch,
  } = useGetCategoriesQuery();

  // TODO: replace this logic to separate file and reuse in others components
  if (isLoading) {
    return (
      <div className={styles.grid}>
        {Array.from({ length: 8 }).map((_, i) => (
          <CategorySkeleton key={i} />
        ))}
      </div>
    );
  }

  // TODO: replace error div logic to shared/ui and reuse in products, deals
  if (isError)
    return (
      <div className={styles.error}>
        <p>Can't load categories.</p>
        <Button onClick={refetch}>Try again</Button>
      </div>
    );

  return (
    <div className={styles.grid}>
      {categories?.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};
