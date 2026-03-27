import { CategoriesList } from '@/entities/category/ui/CategoriesList/CategoriesList.tsx';
import styles from './CategoriesPage.module.scss';
import { Heading } from '@/widgets/Heading';

export const CategoriesPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Product Categories</h1>
      <p className={styles.text}>
        Browse our wide selection of premium electronics by category
      </p>
      <CategoriesList />
      <Heading
        title={'Product Categories'}
        text={'Browse our wide selection of premium electronics by category'}
        align={'left'}
      />
    </div>
  );
};

export default CategoriesPage;
