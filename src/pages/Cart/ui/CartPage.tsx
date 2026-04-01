import styles from './CartPage.module.scss';

import {
  CartTable,
  OrderSummary,
  PromoCode,
  ShippingInfo,
} from '@/widgets/Cart';
export const CartPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Shopping Cart</h1>

      <div className={styles.grid}>
        <div className={styles.left}>
          <CartTable />
          <PromoCode />
        </div>

        <div className={styles.right}>
          <OrderSummary />

          <ShippingInfo />
        </div>
      </div>
    </div>
  );
};
export default CartPage;
