import styles from './DealCard.module.scss';
import type { Deal } from '@/entities/deal';

interface DealCardProps {
  deal: Deal;
}

export const DealCard = ({ deal }: DealCardProps) => {
  return (
    <div className={styles.card}>
      {/* Title + Description */}
      <h3 className={styles.title}>{deal.title}</h3>
      <p className={styles.description}>{deal.description}</p>

      {/* Banner */}
      <div className={styles.banner}>
        <div className={styles.bannerLeft}>
          <h4 className={styles.bannerTitle}>{deal.bannerTitle}</h4>
          <p className={styles.bannerText}>{deal.bannerText}</p>
        </div>

        <div className={styles.ends}>
          Ends at: {new Date(deal.endsAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};
