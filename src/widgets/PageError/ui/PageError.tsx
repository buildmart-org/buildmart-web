import PageErrorIcon from '@/shared/assets/icons/Error.svg?react';
import styles from './PageError.module.scss';
import { Button } from '@/shared/ui';

export const PageError = () => {
  const handleReloadCLick = () => {
    location.reload();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <PageErrorIcon className={styles.icon} />
        <h3 className={styles.title}>Something went wrong</h3>
        <p className={styles.description}>
          Sorry, an unexpected error occurred. Please try refreshing the page or
          come back later.
        </p>
        <Button
          onClick={handleReloadCLick}
          theme="primary"
          size="md"
          className={styles.button}
        >
          Try reload
        </Button>
      </div>
    </div>
  );
};
