import { type ReactNode, useEffect, useState } from 'react';
import CloseIcon from '@/shared/assets/icons/Close.svg?react';

import styles from './Toast.module.scss';
import { Button } from '@/shared/ui';
import type { ToastVariantType } from '@/shared/ui/Toast/model/types.ts';
import { iconMap } from '@/shared/ui/Toast/model/consts.ts';

interface ToastProps {
  children: ReactNode;
  close: () => void;
  variant?: ToastVariantType;
}

export const Toast = ({ children, close, variant = 'success' }: ToastProps) => {
  const [isClosing, setIsClosing] = useState(false);

  const Icon = iconMap[variant];

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(close, 250);
  };

  useEffect(() => {
    const timer = setTimeout(handleClose, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.toast} ${isClosing ? styles.closing : ''}`}>
      <Icon className={styles.icon} />

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
