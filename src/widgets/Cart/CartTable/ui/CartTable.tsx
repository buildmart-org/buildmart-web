import styles from './CartTable.module.scss';
import type { CartDetailedItem } from '@/entities/cart/model/types/CartSchema.ts';
import { CartItem } from '@/widgets/Cart/CartItem/CartItem.tsx';

interface CartTableProps {
  cart: CartDetailedItem[];
}

export const CartTable = ({ cart }: CartTableProps) => {
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
          <CartItem key={item.product.id} item={item} />
        ))}
      </div>
    </div>
  );
};
