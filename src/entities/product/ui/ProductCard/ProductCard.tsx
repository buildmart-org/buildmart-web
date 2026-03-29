import type { Product } from '@/entities/product';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/shared/ui';
import CartIcon from '@/shared/assets/icons/Cart.svg?react';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };
  // TODO: refactor and redo ProductCard to better variant
  return (
    <div className={styles.card}>
      {/* IMAGE */}
      <div className={styles.imageWrapper} onClick={handleNavigate}>
        <img src={product.file} alt={product.title} />
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        <h3 className={styles.title} onClick={handleNavigate}>
          {product.title}
        </h3>

        {/* RATING */}
        <div className={styles.rating}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={
                i < Math.round(product.rating) ? styles.starFilled : styles.star
              }
            >
              ★
            </span>
          ))}
          <span className={styles.ratingValue}>({product.rating})</span>
        </div>

        {/* PRICE */}
        <div className={styles.priceRow}>
          <span className={styles.price}>${product.price}</span>

          {product.priceOld && (
            <span className={styles.oldPrice}>${product.priceOld}</span>
          )}
        </div>

        {/* CATEGORY */}
        <div className={styles.category}>{product.category.title}</div>

        {/* BUTTON */}
        <Button className={styles.button} theme="primary" Icon={<CartIcon />}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
