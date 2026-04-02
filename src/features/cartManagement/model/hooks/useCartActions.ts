import { useAppDispatch } from '@/shared/lib/redux/hooks.ts';
import { cartActions } from '@/entities/cart/model/slice/cartSlice.ts';
import { useCallback } from 'react';

export const useCartActions = () => {
  const dispatch = useAppDispatch();

  const increment = useCallback(
    (productId: string) =>
      dispatch(cartActions.changeQuantity({ productId, delta: 1 })),
    [dispatch],
  );

  const decrement = useCallback(
    (productId: string) =>
      dispatch(cartActions.changeQuantity({ productId, delta: -1 })),
    [dispatch],
  );

  const remove = useCallback(
    (productId: string) => dispatch(cartActions.removeItem({ productId })),
    [dispatch],
  );

  const setQuantity = useCallback(
    (productId: string, qty: number) =>
      dispatch(cartActions.setQuantity({ productId, quantity: qty })),
    [dispatch],
  );

  return { increment, decrement, remove, setQuantity };
};
