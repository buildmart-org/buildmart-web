import { CategoriesList } from '@/entities/category/ui/CategoriesList/CategoriesList.tsx';
import styles from './CategoriesPage.module.scss';
import { Heading } from '@/widgets/Heading';
import { DataLayout } from '@/widgets/DataLayout';

export const CategoriesPage = () => {
  return (
    <div className={styles.wrapper}>
      <Heading
        title={'Product Categories'}
        text={'Browse our wide selection of premium electronics by category'}
        align={'left'}
      />

      <div className={styles.categories}>
        <DataLayout mode={'grid'}>
          <CategoriesList />
        </DataLayout>
      </div>
    </div>
  );
};

export default CategoriesPage;
