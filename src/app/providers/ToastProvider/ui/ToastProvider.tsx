import { useState, useMemo, useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from '@/shared/ui/Toast/ui/Toast.module.scss';
import {
  setToast,
  Toast,
  ToastContext,
  type ToastItem,
  type ToastVariantType,
} from '@/shared/ui/Toast';

interface Props {
  children: ReactNode;
}

export const ToastProvider = ({ children }: Props) => {
  const [toast, setToastState] = useState<{
    item: ToastItem;
    variant: ToastVariantType;
  } | null>(null);

  const open = (content: string, variant: ToastVariantType = 'success') => {
    setToastState({
      item: { id: Date.now().toString(), content },
      variant,
    });
  };

  const close = () => setToastState(null);

  useEffect(() => {
    setToast(open); // use toast in service
  }, []);

  const value = useMemo(() => ({ open, close }), []);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {createPortal(
        <div className={styles.toastsWrapper}>
          {toast && (
            <Toast close={close} variant={toast.variant}>
              {toast.item.content}
            </Toast>
          )}{' '}
        </div>,
        document.body,
      )}
    </ToastContext.Provider>
  );
};
