import { Button } from '@/shared/ui';
import styles from './NotFoundBlock.module.scss';
import ArrrowRigntIcon from '@/shared/assets/icons/Arrow.svg?react';

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
        <h1 className={styles.title}>{title}</h1>

        {description && <p className={styles.description}>{description}</p>}

        {(actionText || secondaryText) && (
          <div className={styles.actions}>
            {actionText && onAction && (
              <Button
                theme={'primary'}
                Icon={<ArrrowRigntIcon />}
                iconSide={'right'}
                onClick={onAction}
                size={'xl'}
              >
                {actionText}
              </Button>
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
