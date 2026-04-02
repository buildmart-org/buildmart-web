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
type IconSide = 'left' | 'right';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  Icon?: ReactNode;
  iconSide?: IconSide;
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
}

export const Button = ({
  children,
  Icon,
  iconSide = 'left',
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
      {Icon && iconSide === 'left' && (
        <span className={styles.iconWrapper}>{Icon}</span>
      )}

      {children}

      {Icon && iconSide === 'right' && (
        <span className={styles.iconWrapper}>{Icon}</span>
      )}
    </button>
  );
};
