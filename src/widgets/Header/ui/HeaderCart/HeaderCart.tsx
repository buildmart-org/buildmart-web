import { Link } from 'react-router-dom';
import { routePaths } from '@/shared/config';
import styles from './HeaderCart.module.scss';
import { Badge } from '@/shared/ui';
import { useCartBadgeCount } from '@/features/cartBage';
import CartIcon from '@/shared/assets/icons/Cart.svg?react';

export const HeaderCart = () => {
  const count = useCartBadgeCount();

  return (
    <Link to={routePaths.cart} className={styles.cartWrapper}>
      <CartIcon className={styles.cart} />
      {count && <Badge value={count} />}
    </Link>
  );
};
