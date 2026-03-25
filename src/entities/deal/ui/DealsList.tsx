import { useGetDealsQuery } from '@/entities/deal';
import { DealCard } from './DealCard';
import { ErrorBlock } from '@/shared/ui';
import styles from './DealsList.module.scss';

export const DealsList = () => {
  const { data, isLoading, isError, refetch } = useGetDealsQuery();

  if (isLoading) {
    return <div className={styles.list}>Loading...</div>;
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
