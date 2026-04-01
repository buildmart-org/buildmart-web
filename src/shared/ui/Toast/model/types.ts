import { ToastVariant } from '@/shared/ui/Toast';

export interface ToastItem {
  id: string;
  content: string;
}

export type ToastVariantType = keyof typeof ToastVariant;
