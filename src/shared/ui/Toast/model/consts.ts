import CheckIcon from '@/shared/assets/icons/Check.svg?react';
import ErrorIcon from '@/shared/assets/icons/Error.svg?react';
import WarningIcon from '@/shared/assets/icons/Stop.svg?react';
import InfoIcon from '@/shared/assets/icons/Info.svg?react';
import type { ToastVariantType } from '@/shared/ui';

export const iconMap: Record<
  ToastVariantType,
  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
> = {
  success: CheckIcon,
  error: ErrorIcon,
  warning: WarningIcon,
  info: InfoIcon,
};

export const ToastVariant = {
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error',
} as const;
