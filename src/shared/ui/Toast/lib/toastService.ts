import type { ToastVariantType } from '@/shared/ui';

let toastFn: ((message: string, variant?: ToastVariantType) => void) | null =
  null;

export const setToast = (
  fn: (message: string, variant?: ToastVariantType) => void,
) => {
  toastFn = fn;
};

export const showToast = (message: string, variant?: ToastVariantType) => {
  toastFn?.(message, variant);
};
