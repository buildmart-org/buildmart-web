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
          {/*<div className={styles.shipping}>*/}
          {/*  <h3>Shipping Information</h3>*/}

          {/*  <div className={styles.shippingItem}>*/}
          {/*    <div className={styles.shippingItemImg}>*/}
          {/*      <LocationIcon />*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <p className={styles.label}>Estimated Delivery</p>*/}
          {/*      <p className={styles.value}>3-5 business days</p>*/}
          {/*    </div>*/}
          {/*  </div>*/}

          {/*  <div className={styles.shippingItem}>*/}
          {/*    <div className={styles.shippingItemImg}>*/}
          {/*      <CalendarIcon />*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <p className={styles.label}>Shipping Address</p>*/}
          {/*      <p className={styles.value}>*/}
          {/*        123 Construction Ave*/}
          {/*        <br />*/}
          {/*        Builder City, BC 12345*/}
          {/*        <br />*/}
          {/*        United States*/}
          {/*      </p>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};
export default CartPage;
