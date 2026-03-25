import styles from './CategoriesSkeleton.module.scss';
import clsx from 'clsx';

export const CategoriesSkeleton = () => {
  return <div className={clsx(styles.skeletonCard, 'skeleton')}></div>;
};
