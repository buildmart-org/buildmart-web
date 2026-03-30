import { memo, useId } from 'react';
import clsx from 'clsx';
import StarIcon from '@/shared/assets/icons/Star.svg?react';
import styles from './Rating.module.scss';

interface StarRatingProps {
  className?: string;
  value?: number;
  size?: number;
}

const stars = [1, 2, 3, 4, 5];

export const Rating = memo((props: StarRatingProps) => {
  const { className, value = 0, size = 16 } = props;
  const componentId = useId();
  const validatedValue = Math.min(Math.max(value, 0), 5);

  return (
    <div className={clsx(styles.StarRating, className)}>
      <svg
        width="0"
        height="0"
        style={{ position: 'absolute', visibility: 'hidden' }}
      >
        <defs>
          {stars.map((starNumber) => {
            const remainder = validatedValue - (starNumber - 1);
            const fillPercentage = Math.min(Math.max(remainder, 0), 1) * 100;
            const gradientId = `${componentId}-star-gradient-${starNumber}`;

            return (
              <linearGradient key={gradientId} id={gradientId}>
                <stop offset={`${fillPercentage}%`} stopColor="#FFD700" />
                <stop offset={`${fillPercentage}%`} stopColor="transparent" />
              </linearGradient>
            );
          })}
        </defs>
      </svg>

      {stars.map((starNumber) => {
        const remainder = validatedValue - (starNumber - 1);
        const fillPercentage = Math.min(Math.max(remainder, 0), 1) * 100;
        const gradientId = `${componentId}-star-gradient-${starNumber}`;

        let strokeColor = '#BDC3C7';
        let fillColor = 'none';

        if (fillPercentage > 0) {
          strokeColor = '#FFD700';
          fillColor = `url(#${gradientId})`;
        }

        return (
          <StarIcon
            key={starNumber}
            className={styles.starIcon}
            width={size}
            height={size}
            style={{ color: strokeColor }}
            fill={fillColor}
          />
        );
      })}
    </div>
  );
});
