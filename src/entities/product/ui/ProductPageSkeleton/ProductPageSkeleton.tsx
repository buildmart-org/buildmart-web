import styles from './ProductPageSkeleton.module.scss';
import clsx from 'clsx';

export const ProductPageSkeleton = () => {
  return (
    <div className={styles.wrapper}>
      {/* MAIN GRID */}
      <div className={styles.grid}>
        {/* GALLERY */}
        <div className={styles.gallery}>
          <div className={clsx(styles.mainImage, 'skeleton')} />

          <div className={styles.thumbs}>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className={clsx(styles.thumb, 'skeleton')} />
            ))}
          </div>
        </div>

        {/* INFO */}
        <div className={styles.info}>
          <div className={clsx(styles.title, 'skeleton')} />

          <div className={clsx(styles.rating, 'skeleton')} />

          <div className={clsx(styles.price, 'skeleton')} />

          <div className={styles.attributes}>
            <div className={clsx(styles.attr, 'skeleton')} />
            <div className={clsx(styles.attr, 'skeleton')} />
          </div>

          <div className={clsx(styles.qty, 'skeleton')} />

          <div className={styles.buttons}>
            <div className={clsx(styles.btn, 'skeleton')} />
            <div className={clsx(styles.btn, 'skeleton')} />
          </div>

          <div className={styles.textBlock}>
            <div className={clsx(styles.line, 'skeleton')} />
            <div className={clsx(styles.line, 'skeleton')} />
            <div className={clsx(styles.line, 'skeleton')} />
          </div>
        </div>
      </div>

      {/* RELATED */}
      <div className={styles.related}>
        <div className={styles.carousel}>
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className={clsx(styles.card, 'skeleton')} />
          ))}
        </div>
      </div>
    </div>
  );
};
