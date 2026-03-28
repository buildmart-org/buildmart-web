import { useEffect, useRef, useState } from 'react';
import styles from './Select.module.scss';
import type { SelectOption } from '@/shared/ui/Select/model/types.ts';
import { Button } from '@/shared/ui';

interface SelectProps<T extends string> {
  value: T;
  options: SelectOption<T>[];
  onChange: (value: T) => void;
  placeholder?: string;
}

export const Select = <T extends string>({
  value,
  options,
  onChange,
  placeholder = 'Select...',
}: SelectProps<T>) => {
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <Button
        onClick={() => setOpen((s) => !s)}
        type="button"
        theme="secondary-outline"
        size="lg"
      >
        {selected?.label ?? placeholder}
      </Button>

      {open && (
        <div className={styles.dropdown}>
          {options.map((option) => (
            <div
              key={option.value}
              className={styles.option}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
