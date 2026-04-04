import styles from './OrderSummary.module.scss';
import { Input, Button } from '@/shared/ui';
import Arrow from '@/shared/assets/icons/Arrow.svg?react';
import { useNavigate } from 'react-router-dom';
import { routePaths } from '@/shared/config';
import { formatCurrency } from '@/shared/lib';
import type { CartDetailedItem } from '@/entities/cart/model/types/CartSchema.ts';
import { usePromocode } from '@/features/applyPromo/model/hooks/usePromocode.ts';
import { useAppSelector } from '@/shared/lib/redux/hooks.ts';
import { selectCartSummarySelector } from '@/entities/cart/model/selectors/selectCartTotalsSelector.ts';

interface OrderSummaryProps {
  cart: CartDetailedItem[];
}

export const OrderSummary = (props: OrderSummaryProps) => {
  const { cart } = props;
  const navigate = useNavigate();
  const { isPromocodeApplied, appliedPromocode } = usePromocode();
  const { subtotal, tax, discount, total } = useAppSelector((state) =>
    selectCartSummarySelector(state, cart),
  );

  const handleContinueShoppingClick = () => {
    navigate(routePaths.products);
  };

  return (
    <div className={styles.summary}>
      <h2>Order Summary</h2>

      <div className={styles.lines}>
        <div>
          <span>Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div>
          <span>Tax (8%)</span>
          <span>{formatCurrency(tax)}</span>
        </div>
        {isPromocodeApplied && (
          <div>
            <span className={styles.success}>
              Discount ({appliedPromocode!.discount}%)
            </span>
            <span className={styles.success}>{formatCurrency(discount)}</span>
          </div>
        )}
      </div>

      <div className={styles.totalRow}>
        <span>Total</span>
        <span>{formatCurrency(total)}</span>
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
          onClick={handleContinueShoppingClick}
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  );
};
