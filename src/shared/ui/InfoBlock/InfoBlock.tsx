import styles from './InfoBlock.module.scss';
import clsx from 'clsx';

interface InfoBlockProps {
  title: string;
  description?: string;

  actions?: React.ReactNode;
  footer?: React.ReactNode;

  icon?: React.ReactNode;

  align?: 'left' | 'center';
}

export const InfoBlock = ({
  title,
  description,
  actions,
  footer,
  icon,
  align = 'center',
}: InfoBlockProps) => {
  return (
    <div className={clsx(styles.wrapper, styles[align])}>
      <div className={styles.content}>
        {icon && <div className={styles.icon}>{icon}</div>}

        <h1 className={styles.title}>{title}</h1>

        {description && <p className={styles.description}>{description}</p>}

        {actions && <div className={styles.actions}>{actions}</div>}

        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </div>
  );
};
