import styles from './OrderSummary.module.scss';
import { Input, Button } from '@/shared/ui';
import Arrow from '@/shared/assets/icons/Arrow.svg?react';

export const OrderSummary = () => {
  return (
    <div className={styles.summary}>
      <h2>Order Summary</h2>

      <div className={styles.lines}>
        <div>
          <span>Subtotal</span>
          <span>$130.97</span>
        </div>
        <div>
          <span>Tax (8%)</span>
          <span>$10.48</span>
        </div>
      </div>

      <div className={styles.totalRow}>
        <span>Total</span>
        <span>$141.45</span>
      </div>

      <div className={styles.controls}>
        <Input
          // value={}
          // onChange={(valueX) => {}}
          className={styles.emailInput}
          placeholder="Enter email..."
        />
        <Button
          className={styles.checkout}
          theme={'primary'}
          size={'xl'}
          Icon={<Arrow />}
          iconSide={'right'}
        >
          Proceed to Checkout
        </Button>

        <Button
          theme="secondary-outline"
          className={styles.continue}
          size={'lg'}
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  );
};
