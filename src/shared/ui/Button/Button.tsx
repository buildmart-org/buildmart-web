import type { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

type ButtonTheme =
  | 'primary'
  | 'primary-outline'
  | 'secondary'
  | 'secondary-outline';

type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
}

export const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    theme = 'primary',
    size = 'md',
    disabled = false,
    ...rest
  } = props;

  return (
    <button
      className={clsx(className, styles.button, styles[theme], styles[size], {
        [styles.disabled]: disabled,
      })}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
