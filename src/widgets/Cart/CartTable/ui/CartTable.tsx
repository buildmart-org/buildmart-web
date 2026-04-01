import styles from './CartTable.module.scss';
import Trash from '@/shared/assets/icons/Trash.svg?react';
import { Button } from '@/shared/ui';
import { routePaths } from '@/shared/config';
import { useAppDispatch } from '@/shared/lib/redux/hooks.ts';
import { cartActions } from '@/entities/cart/model/slice/cartSlice.ts';
import { formatCurrency } from '@/shared/lib';
import type { CartDetailedItem } from '@/entities/cart/model/types/CartSchema.ts';

interface CartTableProps {
  cart: CartDetailedItem[];
}

export const CartTable = (props: CartTableProps) => {
  const { cart } = props;

  const dispatch = useAppDispatch();

  const onQuantityIncrementClick = (productId: string) => {
    dispatch(cartActions.changeQuantity({ productId, delta: 1 }));
  };

  const onQuantityDecrementClick = (productId: string) => {
    dispatch(cartActions.changeQuantity({ productId, delta: -1 }));
  };

  const onRemoveCartItemClick = (productId: string) => {
    dispatch(cartActions.removeItem({ productId }));
  };

  return (
    <div className={styles.cartBox}>
      <div className={styles.headerRow}>
        <div>Product</div>
        <div className={styles.center}>Price</div>
        <div className={styles.center}>Quantity</div>
        <div className={styles.right}>Total</div>
      </div>

      <div className={styles.items}>
        {cart.map((item: CartDetailedItem) => (
          <div key={item.product.id} className={styles.item}>
            <div className={styles.product}>
              <img
                src={item.product.files.find((f) => f.isPrimary)?.url}
                className={styles.image}
              />
              <div>
                <a
                  className={styles.name}
                  href={`${routePaths.products}/${item.product.id}`}
                >
                  {item.product.title}
                </a>
                <p className={styles.category}>{item.product.category.title}</p>

                {/*<button className={styles.removeMobile}>*/}
                {/*<Trash width={16} height={16} />*/}
                {/*  Remove*/}
                {/*</button>*/}
              </div>
            </div>

            <div className={styles.price}>
              {formatCurrency(item.product.price)}
            </div>

            <div className={styles.qty}>
              <Button
                onClick={() => onQuantityDecrementClick(item.product.id)}
                className={styles.qtyBtn}
                theme={'ghost'}
                size={'sm'}
              >
                −
              </Button>
              <span>{item.quantity ?? 0}</span>
              <Button
                onClick={() => onQuantityIncrementClick(item.product.id)}
                className={styles.qtyBtn}
                theme={'ghost'}
                size={'sm'}
              >
                +
              </Button>{' '}
            </div>

            <div className={styles.total}>
              <span>{formatCurrency(item.total)}</span>
              <button onClick={() => onRemoveCartItemClick(item.product.id)}>
                <Trash className={styles.trash} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
