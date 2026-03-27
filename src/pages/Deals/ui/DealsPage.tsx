import styles from './DealsPage.module.scss';
import { DealsList } from '@/entities/deal';
import { Heading } from '@/widgets/Heading';

export const DealsPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Hot Deals</h1>
      <p className={styles.text}>
        Don’t miss limited-time offers on top products
      </p>
      <Heading
        title={'Hot Deals'}
        text={'Don’t miss limited-time offers on top products'}
        align={'left'}
      />

      <DealsList />
    </div>
  );
};

export default DealsPage;
