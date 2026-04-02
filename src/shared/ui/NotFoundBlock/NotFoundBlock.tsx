import { Button } from '@/shared/ui';
import styles from './NotFoundBlock.module.scss';

interface NotFoundBlockProps {
  title: string;
  description?: string;

  actionText?: string;
  onAction?: () => void;

  secondaryText?: string;
  onSecondaryAction?: () => void;
}

export const NotFoundBlock = ({
  title,
  description,
  actionText,
  onAction,
  secondaryText,
  onSecondaryAction,
}: NotFoundBlockProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>

        {description && <p className={styles.description}>{description}</p>}

        {(actionText || secondaryText) && (
          <div className={styles.actions}>
            {actionText && onAction && (
              <Button onClick={onAction}>{actionText}</Button>
            )}

            {secondaryText && onSecondaryAction && (
              <Button theme="ghost" onClick={onSecondaryAction}>
                {secondaryText}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
