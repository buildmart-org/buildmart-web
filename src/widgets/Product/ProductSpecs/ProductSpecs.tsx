import styles from './ProductSpecs.module.scss';
import type { Spec } from '@/entities/product';

interface ProductSpecsProps {
  specs: Spec[];
}

export const ProductSpecs = ({ specs }: ProductSpecsProps) => {
  const middle = Math.ceil(specs.length / 2);

  const left = specs.slice(0, middle);
  const right = specs.slice(middle);

  return (
    <div className={styles.wrapper}>
      <div className={styles.column}>
        {left.map((spec, index) => (
          <div
            key={spec.id}
            className={`${styles.item} ${
              index !== left.length - 1 ? styles.withBorder : ''
            }`}
          >
            <div className={styles.key}>{spec.key}</div>
            <div className={styles.value}>{spec.value}</div>
          </div>
        ))}
      </div>

      <div className={styles.column}>
        {right.map((spec, index) => (
          <div
            key={spec.id}
            className={`${styles.item} ${
              index !== right.length - 1 ? styles.withBorder : ''
            }`}
          >
            <div className={styles.key}>{spec.key}</div>
            <div className={styles.value}>{spec.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
