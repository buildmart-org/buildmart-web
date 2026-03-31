import styles from './ProductsSkeleton.module.scss';
import clsx from 'clsx';

interface ProductsSkeletonProps {
  length?: number;
}

export const ProductsSkeleton = ({ length = 8 }: ProductsSkeletonProps) => {
  return Array.from({ length }).map((_, i) => (
    <div key={i} className={clsx(styles.skeletonCard, 'skeleton')} />
  ));
};
