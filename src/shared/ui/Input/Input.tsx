import {
  type ChangeEvent,
  type InputHTMLAttributes,
  type ReactNode,
  useState,
} from 'react';

import styles from './Input.module.scss';
import clsx from 'clsx';

type HTMLInputType = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;
type InputThemeType = 'dark';

interface InputProps extends HTMLInputType {
  className?: string;
  Icon?: ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  onEnter?: () => void;
  disabled?: boolean;
  type?: string;
  theme?: InputThemeType;
}

export const Input = (props: InputProps) => {
  const [focus, setFocus] = useState<boolean>(false);

  const {
    className,
    Icon,
    value,
    onChange,
    onEnter,
    disabled = false,
    theme = '',
    type = 'text',
    ...rest
  } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onEnter?.();
    }
  };

  const handleFocus = () => setFocus(true);

  const handleBlur = () => setFocus(false);

  return (
    <div
      className={clsx(styles.inputContainer, styles[theme], className, {
        [styles.disabled]: disabled,
        [styles.focus]: focus,
      })}
    >
      {Icon}
      <input
        {...rest}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        type={type}
        className={clsx(styles.input, {
          [styles.disabled]: disabled,
        })}
      />
    </div>
  );
};
