import styles from './VerticalList.module.scss';

export const VerticalList = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.column}>{children}</div>;
};
