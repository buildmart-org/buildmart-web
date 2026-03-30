import { Heading } from '@/widgets/Heading';
import { DataLayout } from '@/widgets/DataLayout';
import { ProductsList } from '@/entities/product/ui/ProductList/ProductList.tsx';
import { useGetProductsQuery } from '@/entities/product';
import { ProductsControlPanel } from '@/widgets/ProductsControlsPanel';
import { ErrorBlock } from '@/shared/ui';
import { ProductFilters, useProductsFilters } from '@/features/productsFilter';
import { useProductsSort } from '@/features/productsSort';
import styles from './ProductsPage.module.scss';

export const ProductsPage = () => {
  const { sort, setSort } = useProductsSort();
  const {
    filters,
    draftFilters,
    setDraftFilters,
    isOpen,
    toggleFilters,
    resetFilters,
    applyFilters,
  } = useProductsFilters();

  const {
    data: products,
    isError,
    refetch,
  } = useGetProductsQuery({ sort, ...filters });

  if (isError)
    return <ErrorBlock title="Can't load products" onRetry={refetch} />;

  return (
    <div className={styles.wrapper}>
      <Heading
        title={'Building Materials'}
        text={'Premium construction supplies for all your projects'}
        align={'left'}
      />

      {/* PANEL */}
      <div className={styles.panel}>
        <ProductsControlPanel
          total={products?.meta.total}
          sort={sort}
          setSort={setSort}
          toggleFilters={toggleFilters}
          isFiltersOpen={isOpen}
        />

        <ProductFilters
          draftFilters={draftFilters}
          setDraftFilters={setDraftFilters}
          resetFilters={resetFilters}
          applyFilters={applyFilters}
          isFiltersOpen={isOpen}
        />
      </div>

      {/*PRODUCTS*/}
      <div>
        <DataLayout mode={'grid'}>
          <ProductsList products={products?.data} />
        </DataLayout>
      </div>
      {/* TODO: pagination btn-s with current in center and left right if they're available */}
    </div>
  );
};

export default ProductsPage;
