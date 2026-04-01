import { useAppDispatch } from '@/shared/lib/redux/hooks';
import { cartActions } from '@/entities/cart/model/slice/cartSlice.ts';
import { useToast } from '@/shared/ui';
import type { Product } from '@/entities/product';

export const useAddToCart = () => {
  const dispatch = useAppDispatch();
  const { open } = useToast();

  const addToCart = (product: Product) => {
    dispatch(cartActions.addItem({ productId: product.id }));
    open(`Added ${product.title} to cart`, 'success');
  };

  return { addToCart };
};
