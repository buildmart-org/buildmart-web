import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './ProductGallery.module.scss';

import ChevronLeftIcon from '@/shared/assets/icons/ChevronLeft.svg?react';
import ChevronRightIcon from '@/shared/assets/icons/ChevronRight.svg?react';
import type { File } from '@/entities/file';
import { Button } from '@/shared/ui';
import clsx from 'clsx';

interface ProductGalleryProps {
  files: File[];
}

export const ProductGallery = ({ files }: ProductGalleryProps) => {
  const images = useMemo(() => {
    if (!files?.length) return [];

    const primary = files.find((f) => f.isPrimary);
    const rest = files.filter((f) => !f.isPrimary);

    const ordered = primary ? [primary, ...rest] : files;

    return ordered.map((f) => f.url);
  }, [files]);

  const thumbsRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!thumbsRef.current) return;

    const container = thumbsRef.current;
    const item = container.children[currentIndex] as HTMLElement;

    if (!item) return;

    const gap = 12;
    const itemWidth = item.offsetWidth + gap;

    const offset = itemWidth * (currentIndex - 1);

    container.scrollTo({
      left: Math.max(0, offset),
      behavior: 'smooth',
    });
  }, [currentIndex]);

  if (!images.length) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(images.length - 1, prev + 1));
  };

  return (
    <div className={styles.wrapper}>
      {/* MAIN */}
      <div className={styles.main}>
        <img src={images[currentIndex]} />

        {currentIndex > 0 && (
          <Button
            theme={'ghost'}
            className={clsx(styles.arrow, styles.left)}
            onClick={handlePrev}
            Icon={<ChevronLeftIcon />}
          />
        )}

        {currentIndex < images.length - 1 && (
          <Button
            theme={'ghost'}
            className={clsx(styles.arrow, styles.right)}
            onClick={handleNext}
            Icon={<ChevronRightIcon />}
          />
        )}
      </div>

      {/* THUMBS */}
      <div className={styles.thumbsWrapper}>
        <div ref={thumbsRef} className={styles.thumbs}>
          {images.map((img, index) => (
            <button
              key={index}
              className={`${styles.thumb} ${
                index === currentIndex ? styles.active : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={img} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
