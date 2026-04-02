import styles from './CartPageSkeleton.module.scss';
import clsx from 'clsx';

export const CartPageSkeleton = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {/* LEFT: CART TABLE */}
        <div className={styles.left}>
          <div className={styles.table}>
            {/* header */}
            <div className={styles.headerRow}>
              <div className={clsx(styles.hProduct, 'skeleton')} />
              <div className={clsx(styles.hPrice, 'skeleton')} />
              <div className={clsx(styles.hQty, 'skeleton')} />
              <div className={clsx(styles.hTotal, 'skeleton')} />
            </div>

            {/* rows */}
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className={styles.row}>
                <div className={styles.product}>
                  <div className={clsx(styles.image, 'skeleton')} />
                  <div className={styles.productInfo}>
                    <div className={clsx(styles.title, 'skeleton')} />
                    <div className={clsx(styles.category, 'skeleton')} />
                  </div>
                </div>

                <div className={clsx(styles.price, 'skeleton')} />

                <div className={styles.qty}>
                  <div className={clsx(styles.qtyBtn, 'skeleton')} />
                  <div className={clsx(styles.qtyValue, 'skeleton')} />
                  <div className={clsx(styles.qtyBtn, 'skeleton')} />
                </div>

                <div className={styles.total}>
                  <div className={clsx(styles.totalValue, 'skeleton')} />
                  <div className={clsx(styles.trash, 'skeleton')} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: SIDEBAR */}
        <div className={styles.right}>
          {/* ORDER SUMMARY */}
          <div className={styles.summary}>
            <div className={clsx(styles.summaryTitle, 'skeleton')} />

            <div className={styles.lines}>
              <div className={clsx(styles.line, 'skeleton')} />
              <div className={clsx(styles.line, 'skeleton')} />
              <div className={clsx(styles.line, 'skeleton')} />
            </div>

            <div className={clsx(styles.totalRow, 'skeleton')} />

            <div className={styles.buttons}>
              <div className={clsx(styles.button, 'skeleton')} />
              <div className={clsx(styles.button, 'skeleton')} />
            </div>
          </div>

          {/* PROMO */}
          <div className={styles.promo}>
            <div className={clsx(styles.promoTitle, 'skeleton')} />
            <div className={styles.promoRow}>
              <div className={clsx(styles.input, 'skeleton')} />
              <div className={clsx(styles.promoBtn, 'skeleton')} />
            </div>
          </div>

          {/* SHIPPING */}
          <div className={styles.shipping}>
            <div className={clsx(styles.shippingTitle, 'skeleton')} />

            <div className={styles.shippingItem}>
              <div className={clsx(styles.icon, 'skeleton')} />
              <div className={styles.shippingText}>
                <div className={clsx(styles.line, 'skeleton')} />
                <div className={clsx(styles.line, 'skeleton')} />
              </div>
            </div>

            <div className={styles.shippingItem}>
              <div className={clsx(styles.icon, 'skeleton')} />
              <div className={styles.shippingText}>
                <div className={clsx(styles.line, 'skeleton')} />
                <div className={clsx(styles.line, 'skeleton')} />
                <div className={clsx(styles.line, 'skeleton')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
