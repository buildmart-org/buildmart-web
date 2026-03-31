import styles from './PromoCode.module.scss';
import { Input, Button } from '@/shared/ui';

export const PromoCode = () => {
  return (
    <div className={styles.promo}>
      <h3>Have a promo code?</h3>
      <div className={styles.row}>
        <Input placeholder="Enter promo code" />
        <Button>Apply</Button>
      </div>
    </div>
  );
};
