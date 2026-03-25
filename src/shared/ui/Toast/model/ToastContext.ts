import { createContext } from 'react';

export interface ToastContextValue {
  open: (content: string) => void;
  close: () => void;
}

export const ToastContext = createContext<ToastContextValue | null>(null);
