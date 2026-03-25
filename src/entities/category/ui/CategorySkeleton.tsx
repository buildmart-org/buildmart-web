import styles from './CategoryCard.module.scss';

export const CategorySkeleton = () => {
  return (
    <div className={`${styles.card} skeleton`}>
      <div className={styles.imagePlaceholder} />
      <div className={styles.titlePlaceholder} />
    </div>
  );
};
