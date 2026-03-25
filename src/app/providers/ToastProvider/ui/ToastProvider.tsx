import { useState, useMemo, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Toast } from '@/shared/ui';
import { ToastContext } from '@/shared/config';
import styles from '@/shared/ui/Toast/Toast.module.scss';

interface ToastItem {
  id: string;
  content: string;
}

interface Props {
  children: ReactNode;
}

export const ToastProvider = ({ children }: Props) => {
  const [toast, setToast] = useState<ToastItem | null>(null);

  const open = (content: string) => {
    setToast({
      id: Date.now().toString(),
      content,
    });
  };

  const close = () => setToast(null);

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
