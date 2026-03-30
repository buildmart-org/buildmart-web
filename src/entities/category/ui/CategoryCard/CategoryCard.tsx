import { useNavigate } from 'react-router-dom';
import styles from './CategoryCard.module.scss';
import { pluralizeProduct } from '@/shared/lib';
import type { CategoryWithDetails } from '@/entities/category/model/types/types.ts';

interface CategoryCardProps {
  category: CategoryWithDetails;
}

export const CategoryCard = (props: CategoryCardProps) => {
  const { category } = props;

  const navigate = useNavigate();

  const handleClick = () => navigate(`/products?category=${category.id}`);

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.imageWrapper}>
        {category.files && (
          <img src={category.files[0].url} alt={category.title} />
        )}
      </div>
      <h3 className={styles.title}>{category.title}</h3>
      <p className={styles.count}>
        {category.productCount} {pluralizeProduct(category.productCount)}
      </p>
    </div>
  );
};
