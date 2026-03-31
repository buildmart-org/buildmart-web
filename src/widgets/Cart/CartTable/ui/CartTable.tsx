import styles from './CartTable.module.scss';
import Trash from '@/shared/assets/icons/Trash.svg?react';
import { Button } from '@/shared/ui';

export const CartTable = () => {
  return (
    <div className={styles.cartBox}>
      <div className={styles.headerRow}>
        <div>Product</div>
        <div className={styles.center}>Price</div>
        <div className={styles.center}>Quantity</div>
        <div className={styles.right}>Total</div>
      </div>

      <div className={styles.items}>
        {[1, 2].map((i) => (
          <div key={i} className={styles.item}>
            <div className={styles.product}>
              <img
                src="https://images.unsplash.com/photo-1718117075248-3d3c3cd65264"
                className={styles.image}
              />
              <div>
                <a className={styles.name} href="#">
                  Premium Cement Bags
                </a>
                <p className={styles.category}>Cement & Concrete</p>

                {/*<button className={styles.removeMobile}>*/}
                {/*<Trash width={16} height={16} />*/}
                {/*  Remove*/}
                {/*</button>*/}
              </div>
            </div>

            <div className={styles.price}>$24.99</div>

            <div className={styles.qty}>
              <Button className={styles.qtyBtn} theme={'ghost'} size={'sm'}>
                −
              </Button>
              <span>1</span>
              <Button className={styles.qtyBtn} theme={'ghost'} size={'sm'}>
                +
              </Button>{' '}
            </div>

            <div className={styles.total}>
              <span>$24.99</span>
              <button>
                <Trash className={styles.trash} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
