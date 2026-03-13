import { useNavigate } from 'react-router-dom';
import NotFoundIcon from '@/shared/assets/icons/NotFound.svg?react';
import { routePaths } from '@/shared/config';
import { Button } from '@/shared/ui';

import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleBackCLick = () => {
    if (window.history.length < 1) {
      navigate(routePaths['']);
      return;
    }
    navigate(-1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <NotFoundIcon className={styles.icon} />
        <h3 className={styles.title}>Page not found</h3>
        <p className={styles.description}>
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Button
          className={styles.button}
          theme="primary"
          onClick={handleBackCLick}
        >
          Go back
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
