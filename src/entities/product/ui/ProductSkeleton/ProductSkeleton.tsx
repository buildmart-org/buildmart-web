import styles from './ProductSkeleton.module.scss';
import clsx from 'clsx';

export const ProductSkeleton = () => {
  return <div className={clsx(styles.skeletonCard, 'skeleton')}></div>;
};
