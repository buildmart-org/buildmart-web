import { memo } from 'react';
import styles from './CartItem.module.scss';
import Trash from '@/shared/assets/icons/Trash.svg?react';
import { Button } from '@/shared/ui';
import { formatCurrency } from '@/shared/lib';
import type { CartDetailedItem } from '@/entities/cart/model/types/CartSchema.ts';

interface CartItemProps {
  item: CartDetailedItem;
  onIncrement: (productId: string) => void;
  onDecrement: (productId: string) => void;
  onRemove: (productId: string) => void;
}

export const CartItem = memo((props: CartItemProps) => {
  const { item, onIncrement, onDecrement, onRemove } = props;

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
        </div>
      </div>

      <div className={styles.price}>{formatCurrency(product.price)}</div>

      <div className={styles.qty}>
        <Button
          onClick={() => onDecrement(product.id)}
          className={styles.qtyBtn}
          theme="ghost"
          size="sm"
        >
          −
        </Button>

        <span>{item.quantity ?? 0}</span>

        <Button
          onClick={() => onIncrement(product.id)}
          className={styles.qtyBtn}
          theme="ghost"
          size="sm"
        >
          +
        </Button>
      </div>

      <div className={styles.total}>
        <span>{formatCurrency(item.total)}</span>

        <button onClick={() => onRemove(product.id)}>
          <Trash className={styles.trash} />
        </button>
      </div>
    </div>
  );
});
