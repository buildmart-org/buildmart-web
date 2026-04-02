import { useAppSelector } from '@/shared/lib/redux/hooks';
import { selectCartItemQty } from '@/entities/cart/model/selectors/selectCartItemQty';
import { Button } from '@/shared/ui';
import { useAddToCart } from '@/features/addToCart';
import type { Product } from '@/entities/product';

import CartIcon from '@/shared/assets/icons/Cart.svg?react';
import styles from './AddToCartDetails.module.scss';

interface Props {
  product: Product;
  quantity: number;
}

export const AddToCartDetails = ({ product, quantity }: Props) => {
  const { addToCart } = useAddToCart();

  const qtyInCart = useAppSelector(selectCartItemQty(product.id));

  return (
    <Button
      theme="primary"
      size="xl"
      Icon={<CartIcon />}
      onClick={() => addToCart(product, quantity)}
      className={styles.button}
    >
      {quantity > 1 ? `Add ${quantity} to Cart` : 'Add to Cart'}

      {!!qtyInCart && <span className={styles.badge}>{qtyInCart}</span>}
    </Button>
  );
};
