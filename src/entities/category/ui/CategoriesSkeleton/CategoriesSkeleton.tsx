import styles from './CategoriesSkeleton.module.scss';
import clsx from 'clsx';

interface CategoriesSkeletonProps {
  length?: number;
}

export const CategoriesSkeleton = (props: CategoriesSkeletonProps) => {
  const { length = 6 } = props;

  return Array.from({ length }).map((_, i) => (
    <div key={i} className={clsx(styles.skeletonCard, 'skeleton')} />
  ));
};
