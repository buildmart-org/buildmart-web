import { type ReactNode, useEffect, useState } from 'react';
import CloseIcon from '@/shared/assets/icons/Close.svg?react';
import CheckIcon from '@/shared/assets/icons/Check.svg?react';

import styles from './Toast.module.scss';
import { Button } from '@/shared/ui';

interface ToastProps {
  children: ReactNode;
  close: () => void;
}

export const Toast = ({ children, close }: ToastProps) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(close, 250); // время анимации
  };

  useEffect(() => {
    const timer = setTimeout(handleClose, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.toast} ${isClosing ? styles.closing : ''}`}>
      <CheckIcon className={styles.icon} />

      <span className={styles.text}>{children}</span>

      <Button
        className={styles.close}
        theme="ghost"
        size="xs"
        onClick={handleClose}
      >
        <CloseIcon />
      </Button>
    </div>
  );
};
