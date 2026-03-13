import styles from './PageLoader.module.scss';
import { Spinner } from '@/shared/ui';

export const PageLoader = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Loading...</h3>
      <Spinner />
    </div>
  );
};
