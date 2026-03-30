import clsx from 'clsx';
import styles from './DealSkeleton.module.scss';

interface DealsSkeletonProps {
  length?: number;
}

export const DealsSkeleton = (props: DealsSkeletonProps) => {
  const { length = 5 } = props;

  return Array.from({ length }).map((_, i) => (
    <div key={i} className={clsx(styles.skeletonCard, 'skeleton')} />
  ));
};
