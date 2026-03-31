import styles from './DealsPage.module.scss';
import { DealsList, useGetDealsQuery } from '@/entities/deal';
import { DataLayout } from '@/widgets/DataLayout';
import { Heading } from '@/widgets/Heading';
import { ErrorBlock, NotFoundBlock } from '@/shared/ui';
import { DealsSkeleton } from '@/entities/deal/ui/DealCardSkeleton/DealsSkeleton.tsx';
import { useNavigate } from 'react-router-dom';
import { routePaths } from '@/shared/config';

export const DealsPage = () => {
  const { data: deals, isLoading, isError, refetch } = useGetDealsQuery();
  const navigate = useNavigate();

  const heading = (
    <Heading
      title="Hot Deals"
      text="Don’t miss limited-time offers on top products"
      align="left"
    />
  );

  let content;

  if (isLoading) {
    content = <DealsSkeleton length={5} />;
  } else if (isError) {
    content = (
      <ErrorBlock
        title="Can't load deals"
        description="Please try again later"
        onRetry={refetch}
      />
    );
  } else if (!deals || deals.length === 0) {
    content = (
      <NotFoundBlock
        title="No deals available"
        description="Browse all products"
        actionText="Go to catalog"
        onAction={() => navigate(routePaths.products)}
      />
    );
  } else {
    content = (
      <DataLayout mode="vertical-list">
        <DealsList deals={deals} />
      </DataLayout>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.deals}>
        {heading}
        {content}
      </div>
    </div>
  );
};

export default DealsPage;
