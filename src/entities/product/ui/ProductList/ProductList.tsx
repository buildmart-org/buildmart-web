import { type Product } from '@/entities/product';
import { ProductCard } from '@/entities/product/ui/ProductCard/ProductCard.tsx';

interface ProductListProps {
  products?: Product[];
}

export const ProductsList = (props: ProductListProps) => {
  const { products } = props;

  // if (!products) {
  //   const { data, isLoading, isError, refetch } = useGetProductsQuery();
  // }

  return products?.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
};
