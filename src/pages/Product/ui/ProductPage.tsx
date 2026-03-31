import { useParams, useNavigate } from 'react-router-dom';
import {
  useGetProductByIdQuery,
  useGetRelatedProductsQuery,
} from '@/entities/product';
import { ProductGallery } from '@/entities/product/ui/ProductGallery/ProductGallery.tsx';
import { ProductInfo } from '@/entities/product/ui/ProductInfo/ProductInfo.tsx';
import { ProductsList } from '@/entities/product/ui/ProductList/ProductList.tsx';
import { DataLayout } from '@/widgets/DataLayout';
import styles from './ProductPage.module.scss';
import { ProductPageSkeleton } from '@/entities/product/ui/ProductPageSkeleton/ProductPageSkeleton.tsx';
import { ErrorBlock, NotFoundBlock } from '@/shared/ui';
import { routePaths } from '@/shared/config';

export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: product,
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useGetProductByIdQuery(id!, {
    skip: !id,
  });

  const { data: related, isLoading: isRelatedLoading } =
    useGetRelatedProductsQuery(id!, {
      skip: !id || !product,
    });

  if (isLoading || isFetching) {
    return <ProductPageSkeleton />;
  }

  if (isError) {
    return (
      <ErrorBlock
        title="Failed to load product"
        description="Please try again"
        onRetry={refetch}
      />
    );
  }

  if (!product) {
    return (
      <div className={styles.wrapper}>
        <NotFoundBlock
          title="Product not found"
          description="This product may have been removed or does not exist"
          actionText="Go to products"
          onAction={() => navigate('/products')}
        />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      {/* breadcrumbs */}
      <nav className={styles.breadcrumbs}>
        <a href={routePaths.products}>Products</a>
        <span>/</span>
        <span>{product.category.title}</span>
      </nav>

      {/* main */}
      <div className={styles.grid}>
        <div className={styles.gallery}>
          <ProductGallery files={product.files} />
        </div>

        <div className={styles.info}>
          <ProductInfo product={product} />
        </div>
      </div>

      {/* related */}
      <div className={styles.related}>
        <h2>Related Products</h2>

        {isRelatedLoading ? (
          <div className={styles.relatedSkeleton}>
            <ProductPageSkeleton /> {/* можно сделать отдельный компактный */}
          </div>
        ) : related && related.length > 0 ? (
          <div className={styles.products}>
            <DataLayout mode="horizontal-carousel">
              <ProductsList products={related} />
            </DataLayout>
          </div>
        ) : (
          <NotFoundBlock
            title="No related products"
            description="Try exploring other categories"
            actionText="Browse products"
            onAction={() => navigate('/products')}
          />
        )}
      </div>
    </div>
  );
};

export default ProductPage;
