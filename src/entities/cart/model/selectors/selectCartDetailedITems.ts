import type { StateSchema } from '@/app/store';
import type { Product } from '@/entities/product';

export const selectCartDetailedItems = (
  state: StateSchema,
  products: Product[],
) => {
  const cartMap = new Map(
    state.cart.items.map((item) => [item.productId, item]),
  );

  return products.map((product) => {
    const quantity = cartMap.get(product.id)?.quantity ?? 0;
    console.log(product.price * quantity);
    return {
      product,
      quantity,
      total: product.price * quantity,
    };
  });
};
