import { useAppSelector } from '@/shared/lib/redux/hooks';
import { selectCartCount } from '@/entities/cart';

export const useCartBadgeCount = () => {
  const count = useAppSelector(selectCartCount);

  if (count <= 0) return null;

  return count > 99 ? '99+' : String(count);
};
