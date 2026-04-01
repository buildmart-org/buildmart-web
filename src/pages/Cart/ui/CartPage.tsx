import styles from './CartPage.module.scss';

import {
  CartTable,
  OrderSummary,
  PromoCode,
  ShippingInfo,
} from '@/widgets/Cart';
import { useGetProductsQuery } from '@/entities/product';
import { ErrorBlock, NotFoundBlock } from '@/shared/ui';
import { useNavigate } from 'react-router-dom';
import { routePaths } from '@/shared/config';
import { selectCartDetailedItems } from '@/entities/cart/model/selectors/selectCartDetailedITems.ts';
import { useAppSelector } from '@/shared/lib/redux/hooks.ts';
import { selectItemsIdsSelector } from '@/entities/cart';

export const CartPage = () => {
  const navigate = useNavigate();
  const itemsIds = useAppSelector(selectItemsIdsSelector);
  // const itemsIds = [
  //   '8f6b1c9e-5e2a-4c3f-9d77-2a4f9b8e1c01',
  //   '2f1c8a4e-3b7d-4a9e-9a1b-6c2d8e4f1001',
  //   '3a9e7d6c-5b4f-4c2a-8d1e-7f6a5b4c2002',
  // ];

  const { data, isLoading, isFetching, isError, refetch } = useGetProductsQuery(
    { ids: itemsIds },
    {
      skip: itemsIds.length === 0,
    },
  );

  const cartDetailed = useAppSelector((state) =>
    selectCartDetailedItems(state, data?.data ?? []),
  );

  const cartEmpty = itemsIds.length === 0 || !data || data?.data.length === 0;

  if (isLoading || isFetching) {
    return <div>Загрузка товаров</div>;
    // return <CartPageSkeleton />;
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
        <NotFoundBlock
          title="Product not found"
          description="This product may have been removed or does not exist"
          actionText="Go to products"
          onAction={() => navigate(routePaths.products)}
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
