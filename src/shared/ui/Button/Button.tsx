import type { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

type ButtonTheme =
  | 'primary'
  | 'primary-outline'
  | 'secondary'
  | 'secondary-outline'
  | 'ghost';

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  Icon?: ReactNode;
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
}

export const Button = ({
  children,
  Icon,
  className,
  theme = 'primary',
  size = 'md',
  disabled = false,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, styles[theme], styles[size], className, {
        [styles.disabled]: disabled,
      })}
      disabled={disabled}
      {...rest}
    >
      {Icon && <span className={styles.iconWrapper}>{Icon}</span>}
      {children}
    </button>
  );
};
