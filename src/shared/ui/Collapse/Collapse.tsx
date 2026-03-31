import { useState } from 'react';
import styles from './Collapse.module.scss';
import ChevronDownIcon from '@/shared/assets/icons/ChevronDown.svg?react';
import { Button } from '@/shared/ui';

interface CollapseProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const Collapse = ({
  title,
  children,
  defaultOpen = false,
}: CollapseProps) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={styles.wrapper}>
      <Button
        theme={'ghost'}
        className={styles.trigger}
        onClick={() => setOpen((prev) => !prev)}
        type="button"
      >
        <span>{title}</span>

        <span className={`${styles.chevron} ${open ? styles.open : ''}`}>
          <ChevronDownIcon />
        </span>
      </Button>

      <div className={`${styles.content} ${open ? styles.show : ''}`}>
        <div className={styles.inner}>{children}</div>
      </div>
    </div>
  );
};
