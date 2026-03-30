import styles from './Heading.module.scss';

interface HeadingProps {
  title: string;
  text?: string;
  align?: 'left' | 'center';
}

export const Heading = ({ title, text, align = 'left' }: HeadingProps) => {
  return (
    <div className={`${styles.wrapper} ${styles[align]}`}>
      <h1 className={styles.title}>{title}</h1>
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};
