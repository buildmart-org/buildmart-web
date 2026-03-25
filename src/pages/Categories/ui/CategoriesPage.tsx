import { CategoriesList } from '@/entities/category/ui/CategoriesList';
import styles from './CategoriesPage.module.scss';

export const CategoriesPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Product Categories</h1>
      <p className={styles.text}>
        Browse our wide selection of premium electronics by category
      </p>
      <CategoriesList />
    </div>
  );
};

export default CategoriesPage;
