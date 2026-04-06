import { memo } from 'react';
import styles from './CartItem.module.scss';
import Trash from '@/shared/assets/icons/Trash.svg?react';
import { Button } from '@/shared/ui';
import { formatCurrency } from '@/shared/lib';
import type { CartDetailedItem } from '@/entities/cart/model/types/CartSchema.ts';
import { useCartActions } from '@/features/cartManagement/model/hooks/useCartActions.ts';

interface CartItemProps {
  item: CartDetailedItem;
}

export const CartItem = memo((props: CartItemProps) => {
  const { item } = props;
  const { increment, decrement, remove } = useCartActions();

  const product = item.product;
  const productUrlPath = `product/${product.id}`;
  const image = product.files.find((f) => f.isPrimary)?.url;

  return (
    <div className={styles.item}>
      <div className={styles.product}>
        <a className={styles.name} href={`${productUrlPath}`}>
          <img src={image} className={styles.image} />
        </a>

        <div>
          <a className={styles.name} href={`${productUrlPath}`}>
            {product.title}
          </a>

          <p className={styles.category}>{product.category.title}</p>

          <button
            className={styles.removeMobile}
            onClick={() => remove(product.id)}
          >
            <Trash className={styles.trash} />
            Remove
          </button>
        </div>
      </div>

      {/* PRICE + QTY (объединено) */}
      <div className={styles.priceRow}>
        <div className={styles.priceBlock}>
          <span className={styles.label}>Price:</span>
          <span className={styles.price}>{formatCurrency(product.price)}</span>
        </div>

        <div className={styles.qty}>
          <Button
            onClick={() => decrement(product.id)}
            className={styles.qtyBtn}
            theme="ghost"
            size="sm"
          >
            −
          </Button>

          <span>{item.quantity ?? 0}</span>

          <Button
            onClick={() => increment(product.id)}
            className={styles.qtyBtn}
            theme="ghost"
            size="sm"
          >
            +
          </Button>
        </div>
      </div>

      {/* TOTAL */}
      <div className={styles.total}>
        <div className={styles.totalInfo}>
          <span className={styles.label}>Total:</span>
          <span className={styles.totalValue}>
            {formatCurrency(item.total)}
          </span>
        </div>

        <button
          className={styles.trashDesktop}
          onClick={() => remove(product.id)}
        >
          <Trash className={styles.trash} />
        </button>
      </div>
    </div>
  );
});
