import styles from './DealsPage.module.scss';
import { DealsList } from '@/entities/deal';
import { DataLayout } from '@/widgets/DataLayout';
import { Heading } from '@/widgets/Heading';

export const DealsPage = () => {
  return (
    <div className={styles.wrapper}>
      <Heading
        title={'Hot Deals'}
        text={'Don’t miss limited-time offers on top products'}
        align={'left'}
      />

      <div className={styles.deals}>
        <DataLayout mode={'vertical-list'}>
          <DealsList />
        </DataLayout>
      </div>
    </div>
  );
};

export default DealsPage;
