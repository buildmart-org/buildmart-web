import { useToast } from '@/shared/ui/Toast/model/useToast.ts';
import { ToastContext } from '@/shared/ui/Toast/model/ToastContext.ts';
import { setToast, showToast } from '@/shared/ui/Toast/lib/toastService.ts';
import { Toast } from '@/shared/ui/Toast/ui/Toast.tsx';
import {
  type ToastItem,
  type ToastVariantType,
} from '@/shared/ui/Toast/model/types.ts';
import { ToastVariant } from '@/shared/ui/Toast/model/consts.ts';

export type { ToastItem, ToastVariantType };
export { Toast, ToastContext, showToast, setToast, useToast, ToastVariant };
