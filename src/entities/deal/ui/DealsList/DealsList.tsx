import { type Deal } from '@/entities/deal';
import { DealCard } from '../DealCard/DealCard.tsx';
import styles from './DealsList.module.scss';
import { ProductsList } from '@/entities/product/ui/ProductList/ProductList.tsx';
import { DataLayout } from '@/widgets/DataLayout';

interface DealsListProps {
  deals: Deal[];
}

export const DealsList = (props: DealsListProps) => {
  const { deals } = props;

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
