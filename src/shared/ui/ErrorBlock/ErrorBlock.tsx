import { Button } from '@/shared/ui';
import styles from './ErrorBlock.module.scss';

interface FetchErrorProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
}

export const ErrorBlock = ({
  title = 'Something went wrong',
  description,
  onRetry,
}: FetchErrorProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>

        {description && <p className={styles.description}>{description}</p>}

        {onRetry && <Button onClick={onRetry}>Try again</Button>}
      </div>
    </div>
  );
};
