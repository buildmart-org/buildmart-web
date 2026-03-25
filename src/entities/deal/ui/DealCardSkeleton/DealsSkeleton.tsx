import clsx from 'clsx';
import styles from './DealSkeleton.module.scss';

export const DealsSkeleton = () => {
  return <div className={clsx(styles.skeletonCard, 'skeleton')} />;
};
