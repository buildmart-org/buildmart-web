import styles from './Grid.module.scss';

export const Grid = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.grid}>{children}</div>;
};
