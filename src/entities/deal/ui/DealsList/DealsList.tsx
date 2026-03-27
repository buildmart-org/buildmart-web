import { type Deal, useGetDealsQuery } from '@/entities/deal';
import { DealCard } from '../DealCard/DealCard.tsx';
import { ErrorBlock } from '@/shared/ui';
import styles from './DealsList.module.scss';
import { DealsSkeleton } from '@/entities/deal/ui/DealCardSkeleton/DealsSkeleton.tsx';
import { ProductsList } from '@/entities/product/ui/ProductList/ProductList.tsx';
import { DataLayout } from '@/widgets/DataLayout';

export const DealsList = () => {
  const { data: deals, isLoading, isError, refetch } = useGetDealsQuery();

  if (isError) {
    return <ErrorBlock title="Can't load deals" onRetry={refetch} />;
  }

  // TODO: NotFoundBlock widget
  // if (!deals) {
  //   return <NotFoundBlock></NotFoundBlock>;
  // }

  if (isLoading) {
    return <DealsSkeleton length={5} />;
  }

  return deals?.map((deal: Deal) => (
    <div className={styles.item}>
      <DealCard key={deal.id} deal={deal} />

      <div className={styles.products}>
        <DataLayout mode={'horizontal-carousel'}>
          <ProductsList products={deal?.products} />
        </DataLayout>
      </div>
    </div>
  ));
};
