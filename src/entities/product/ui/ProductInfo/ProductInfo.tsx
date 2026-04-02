import { useState } from 'react';
import {
  type Product,
  ProductAttributes,
  validateQty,
} from '@/entities/product';
import { Button, Collapse, Input, Rating } from '@/shared/ui';
import { ProductSpecs } from '@/entities/product/ui/ProductSpecs/ProductSpecs.tsx';
import CartIcon from '@/shared/assets/icons/Cart.svg?react';
import styles from './ProductInfo.module.scss';
import { useAddToCart } from '@/features/addToCart';

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useAddToCart();

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>{product.title}</h1>

      <div className={styles.rating}>
        <Rating value={product.rating} size={24} />
        <span className={styles.ratingValue}>({product.rating})</span>
      </div>

      <div className={styles.price}>
        <span>${product.price}</span>
        {product.priceOld && (
          <span className={styles.oldPrice}>${product.priceOld}</span>
        )}
        <span className={styles.unit}>/unit</span>
      </div>

      <div className={styles.attributes}>
        <ProductAttributes attributes={product.attributes} />
      </div>

      <div className={styles.quantity}>
        <h2>Quantity</h2>
        <div className={styles.qtyControls}>
          <Button
            theme="secondary-outline"
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          >
            −
          </Button>
          <Input
            type="number"
            value={String(quantity)}
            onChange={(val) => {
              const validatedValue = validateQty(val);
              if (validatedValue !== null) setQuantity(Number(val));
            }}
          />
          <Button
            theme="secondary-outline"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </Button>
        </div>
      </div>

      <div className={styles.actionBtns}>
        <Button
          theme="primary"
          size="xl"
          Icon={<CartIcon />}
          onClick={() => addToCart(product, quantity)}
        >
          Add to Cart
        </Button>
        <Button theme="primary-outline" size="xl">
          Buy Now
        </Button>
      </div>

      <div className={styles.description}>
        <h2>Description</h2>
        <p>{product.description}</p>
      </div>

      <Collapse title="Technical Specifications" defaultOpen>
        <ProductSpecs specs={product.specs} />
      </Collapse>
    </div>
  );
};
