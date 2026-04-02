import { useAppSelector } from '@/shared/lib/redux/hooks';
import type { Product } from '@/entities/product';
import PlusIcon from '@/shared/assets/icons/Plus.svg?react';

import MinusIcon from '@/shared/assets/icons/Minus.svg?react';
import styles from './AddToCartCard.module.scss';
import { selectCartItemQty } from '@/entities/cart/model/selectors/selectCartItemQty.ts';
import { Button } from '@/shared/ui';
import { useAddToCart } from '@/features/addToCart';
import { useCartActions } from '@/features/cartManagement/model/hooks/useCartActions.ts';

interface Props {
  product: Product;
}

export const AddToCartCard = ({ product }: Props) => {
  const { increment, decrement } = useCartActions();
  const { addToCart } = useAddToCart();
  const cartItemQty = useAppSelector(selectCartItemQty(product.id));

  if (!cartItemQty) {
    return <Button onClick={() => addToCart(product)}>Add to cart</Button>;
  }

  return (
    <div className={styles.counter}>
      <Button
        size="md"
        theme="ghost"
        onClick={() => decrement(product.id)}
        Icon={<MinusIcon />}
      />

      <span className={styles.amount}>{cartItemQty}</span>

      <Button
        size="md"
        theme="ghost"
        onClick={() => increment(product.id)}
        Icon={<PlusIcon />}
      />
    </div>
  );
};
