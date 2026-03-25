import { useGetDealsQuery } from '@/entities/deal';
import { DealCard } from '../DealCard/DealCard.tsx';
import { ErrorBlock } from '@/shared/ui';
import styles from './DealsList.module.scss';
import { DealsSkeleton } from '@/entities/deal/ui/DealCardSkeleton/DealsSkeleton.tsx';

export const DealsList = () => {
  const { data, isLoading, isError, refetch } = useGetDealsQuery();

  if (isLoading) {
    return (
      <div className={styles.list}>
        {Array.from({ length: 5 }).map((_, i) => (
          <DealsSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError) {
    return <ErrorBlock title="Can't load deals" onRetry={refetch} />;
  }

  return (
    <div className={styles.list}>
      {data?.map((deal) => (
        <DealCard key={deal.id} deal={deal} />
      ))}
    </div>
  );
};
