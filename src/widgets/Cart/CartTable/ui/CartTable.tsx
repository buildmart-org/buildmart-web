import styles from './CartTable.module.scss';
import { useAppDispatch } from '@/shared/lib/redux/hooks.ts';
import { cartActions } from '@/entities/cart/model/slice/cartSlice.ts';
import type { CartDetailedItem } from '@/entities/cart/model/types/CartSchema.ts';
import { CartItem } from '@/widgets/Cart/CartItem/CartItem.tsx';
import { useCallback } from 'react';

interface CartTableProps {
  cart: CartDetailedItem[];
}

export const CartTable = ({ cart }: CartTableProps) => {
  const dispatch = useAppDispatch();

  const onIncrement = useCallback(
    (productId: string) => {
      dispatch(cartActions.changeQuantity({ productId, delta: 1 }));
    },
    [dispatch],
  );

  const onDecrement = useCallback(
    (productId: string) => {
      dispatch(cartActions.changeQuantity({ productId, delta: -1 }));
    },
    [dispatch],
  );

  const onRemove = useCallback(
    (productId: string) => {
      dispatch(cartActions.removeItem({ productId }));
    },
    [dispatch],
  );

  return (
    <div className={styles.cartBox}>
      <div className={styles.headerRow}>
        <div>Product</div>
        <div className={styles.center}>Price</div>
        <div className={styles.center}>Quantity</div>
        <div className={styles.right}>Total</div>
      </div>

      <div className={styles.items}>
        {cart.map((item) => (
          <CartItem
            key={item.product.id}
            item={item}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};
