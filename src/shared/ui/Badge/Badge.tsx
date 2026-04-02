import styles from './Badge.module.scss';

interface BadgeProps {
  value: string;
}

export const Badge = ({ value }: BadgeProps) => {
  return <span className={styles.badge}>{value}</span>;
};
