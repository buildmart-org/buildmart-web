import { Heading } from '@/widgets/Heading';
import { DataLayout } from '@/widgets/DataLayout';
import { ProductsList } from '@/entities/product/ui/ProductList/ProductList.tsx';
import { useGetProductsQuery } from '@/entities/product';
import { Button, ErrorBlock, InfoBlock } from '@/shared/ui';
import { useProductsFilters } from '@/features/productsFilter';
import { useProductsSort } from '@/features/productsSort';
import styles from './ProductsPage.module.scss';
import { ProductsSkeleton } from '@/entities/product/ui/ProductsSkeleton/ProductsSkeleton.tsx';
import { ProductsPanel } from '@/widgets/Product';
import { useMemo } from 'react';

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

  const hasActiveFilters = useMemo(
    () => Object.keys(filters).length > 0,
    [filters],
  );

  const {
    data: products,
    isError,
    isLoading,
    isFetching,
    refetch,
  } = useGetProductsQuery({ sort, ...filters });

  const HeadingComponent = (
    <Heading
      title="Building Materials"
      text="Premium construction supplies for all your projects"
      align="left"
    />
  );

  if (isError)
    return <ErrorBlock title="Can't load products" onRetry={refetch} />;

  if (isLoading || isFetching) {
    return (
      <div className={styles.wrapper}>
        {HeadingComponent}
        <DataLayout mode={'grid'}>
          <ProductsSkeleton length={8} />
        </DataLayout>
      </div>
    );
  }

  if (!products?.data.length && hasActiveFilters) {
    return (
      <div className={styles.wrapper}>
        {HeadingComponent}

        <ProductsPanel
          sortState={{ sort, setSort }}
          filtersState={{
            draftFilters,
            setDraftFilters,
            applyFilters,
            resetFilters,
            isOpen,
            toggle: toggleFilters,
          }}
        />

        <InfoBlock
          title="No products match your filters"
          description={'Try t choose another filters'}
          actions={
            <Button theme={'primary-outline'} onClick={resetFilters}>
              Clear filters
            </Button>
          }
        ></InfoBlock>
      </div>
    );
  }

  if (!products?.data.length) {
    return (
      <div className={styles.wrapper}>
        {HeadingComponent}

        <ProductsPanel
          sortState={{ sort, setSort }}
          filtersState={{
            draftFilters,
            setDraftFilters,
            applyFilters,
            resetFilters,
            isOpen,
            toggle: toggleFilters,
          }}
        />

        <InfoBlock
          title="No products found"
          description={'Try t choose another filters'}
        ></InfoBlock>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      {HeadingComponent}

      <ProductsPanel
        total={products.meta.total}
        sortState={{ sort, setSort }}
        filtersState={{
          draftFilters,
          setDraftFilters,
          applyFilters,
          resetFilters,
          isOpen,
          toggle: toggleFilters,
        }}
      />

      <DataLayout mode={'grid'}>
        <ProductsList products={products?.data} />
      </DataLayout>
      {/* TODO: pagination btn-s with current in center and left right if they're available */}
    </div>
  );
};

export default ProductsPage;
