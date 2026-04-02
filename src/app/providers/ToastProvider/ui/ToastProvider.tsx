import { useState, useMemo, useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from '@/shared/ui/Toast/ui/Toast.module.scss';
import {
  setToast,
  Toast,
  ToastContext,
  type ToastItem,
} from '@/shared/ui/Toast';

interface Props {
  children: ReactNode;
}

export const ToastProvider = ({ children }: Props) => {
  const [toast, setToastState] = useState<ToastItem | null>(null);

  const open = (content: string) => {
    setToastState({ id: Date.now().toString(), content });
  };

  const close = () => setToastState(null);

  // делаем доступным сервису
  useEffect(() => {
    setToast(open);
  }, []);

  const value = useMemo(() => ({ open, close }), []);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {createPortal(
        <div className={styles.toastsWrapper}>
          {toast && <Toast close={close}>{toast.content}</Toast>}
        </div>,
        document.body,
      )}
    </ToastContext.Provider>
  );
};
