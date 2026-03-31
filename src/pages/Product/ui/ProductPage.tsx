import { useParams } from 'react-router-dom';
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
import { ErrorBlock } from '@/shared/ui';

export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: product,
    isLoading,
    isFetching,
    isError,
  } = useGetProductByIdQuery(id!, {
    skip: !id,
  });
  const { data: related } = useGetRelatedProductsQuery(id!, {
    skip: !id,
  });

  if (isLoading || isFetching) {
    return <ProductPageSkeleton />;
  }

  if (isError) return <ErrorBlock />;
  if (!product) return null;

  return (
    <div className={styles.wrapper}>
      <nav className={styles.breadcrumbs}>
        <a href="/">Products</a>
        <span>/</span>
        <span>{product.category.title}</span>
      </nav>

      <div className={styles.grid}>
        <div className={styles.gallery}>
          <ProductGallery files={product.files} />
        </div>

        <div className={styles.info}>
          <ProductInfo product={product} />
        </div>
      </div>

      <div className={styles.related}>
        <h2>Related Products</h2>
        {related ? (
          <div className={styles.products}>
            <DataLayout mode="horizontal-carousel">
              <ProductsList products={related} />
            </DataLayout>
          </div>
        ) : (
          <div>No related products</div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
