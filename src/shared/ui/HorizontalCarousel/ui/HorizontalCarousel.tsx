import { useRef } from 'react';
import styles from './HorizontalCarousel.module.scss';
import { Button } from '@/shared/ui';
import ChevronLeft from '@/shared/assets/icons/ChevronLeft.svg?react';
import ChevronRight from '@/shared/assets/icons/ChevronRight.svg?react';

interface HorizontalCarouselProps {
  children: React.ReactNode;
  itemsToShow?: number;
}
export const HorizontalCarousel = ({
  children,
  itemsToShow = 4,
}: HorizontalCarouselProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!ref.current) return;

    const firstChild = ref.current.firstElementChild as HTMLElement;
    if (!firstChild) return;

    const gap = 16; // тот же что в CSS
    const itemWidth = firstChild.offsetWidth + gap;

    ref.current.scrollBy({
      left: direction === 'left' ? -itemWidth : itemWidth,
      behavior: 'smooth',
    });
  };
  return (
    <div className={styles.wrapper}>
      <Button
        className={`${styles.arrow} ${styles.left}`}
        theme="ghost"
        onClick={() => scroll('left')}
        Icon={<ChevronLeft />}
      />

      <div
        ref={ref}
        className={styles.container}
        style={
          {
            '--items': itemsToShow,
          } as React.CSSProperties
        }
      >
        {children}
      </div>

      <Button
        className={`${styles.arrow} ${styles.right}`}
        theme="ghost"
        onClick={() => scroll('right')}
        Icon={<ChevronRight />}
      />
    </div>
  );
};
