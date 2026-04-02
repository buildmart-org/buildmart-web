import { createContext } from 'react';
import type { ToastVariantType } from '@/shared/ui';

export interface ToastContextValue {
  open: (content: string, variant?: ToastVariantType) => void;
  close: () => void;
}

export const ToastContext = createContext<ToastContextValue | null>(null);
