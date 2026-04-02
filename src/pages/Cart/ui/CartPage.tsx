import styles from './CartPage.module.scss';

import {
  CartTable,
  OrderSummary,
  PromoCode,
  ShippingInfo,
} from '@/widgets/Cart';
import { useGetProductsQuery } from '@/entities/product';
import { Button, ErrorBlock, InfoBlock } from '@/shared/ui';
import { useNavigate } from 'react-router-dom';
import { routePaths } from '@/shared/config';
import { selectCartDetailedItems } from '@/entities/cart/model/selectors/selectCartDetailedITems.ts';
import { useAppSelector } from '@/shared/lib/redux/hooks.ts';
import { CartPageSkeleton, selectItemsIdsSelector } from '@/entities/cart';

export const CartPage = () => {
  const navigate = useNavigate();
  const itemsIds = useAppSelector(selectItemsIdsSelector);

  const { data, isLoading, isError, refetch } = useGetProductsQuery(
    { ids: itemsIds },
    {
      skip: itemsIds.length === 0,
    },
  );

  const cartDetailed = useAppSelector((state) =>
    selectCartDetailedItems(state, data?.data ?? []),
  );

  const cartEmpty = itemsIds.length === 0 || !data || data?.data.length === 0;

  if (isLoading) {
    return <CartPageSkeleton />;
  }

  if (isError) {
    return (
      <ErrorBlock
        title="Failed to load cart"
        description="Please try again"
        onRetry={refetch}
      />
    );
  }

  if (cartEmpty) {
    return (
      <div className={styles.wrapper}>
        <InfoBlock
          title="Your Cart is Empty"
          description="Start shopping to add items to your cart"
          actions={
            <Button
              theme={'primary'}
              onClick={() => navigate(routePaths.products)}
            >
              Browse Products
            </Button>
          }
        />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Shopping Cart</h1>

      <div className={styles.grid}>
        <div className={styles.left}>
          <CartTable cart={cartDetailed} />
          <PromoCode />
        </div>

        <div className={styles.right}>
          <OrderSummary cart={cartDetailed} />

          <ShippingInfo />
        </div>
      </div>
    </div>
  );
};
export default CartPage;
