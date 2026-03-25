import { DealsList } from '@/entities/deal/ui/DealsList';
import styles from './DealsPage.module.scss';

export const DealsPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Hot Deals</h1>
      <p className={styles.text}>
        Don’t miss limited-time offers on top products
      </p>

      <DealsList />
    </div>
  );
};

export default DealsPage;
