import { Heading } from '@/widgets/Heading';
import { DataLayout } from '@/widgets/DataLayout';
import { ProductsList } from '@/entities/product/ui/ProductList/ProductList.tsx';
import { ProductsPanel, useGetProductsQuery } from '@/entities/product';
import { ErrorBlock, NotFoundBlock } from '@/shared/ui';
import { useProductsFilters } from '@/features/productsFilter';
import { useProductsSort } from '@/features/productsSort';
import styles from './ProductsPage.module.scss';
import { ProductsSkeleton } from '@/entities/product/ui/ProductsSkeleton/ProductsSkeleton.tsx';

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

  if (!products?.data.length) {
    return (
      <div className={styles.wrapper}>
        {HeadingComponent}

        {/* PANEL */}
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

        <NotFoundBlock
          title="No products found"
          description={'Try t choose another filters'}
        />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      {HeadingComponent}

      {/* PANEL */}
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
