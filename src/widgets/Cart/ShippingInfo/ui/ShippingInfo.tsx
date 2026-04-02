import styles from './ShippingInfo.module.scss';
import LocationIcon from '@/shared/assets/icons/Location.svg?react';
import CalendarIcon from '@/shared/assets/icons/Calendar.svg?react';

export const ShippingInfo = () => {
  return (
    <div className={styles.shipping}>
      <h3>Shipping Information</h3>

      <div className={styles.item}>
        <LocationIcon className={styles.icon} />
        <div>
          <p className={styles.label}>Estimated Delivery</p>
          <p className={styles.value}>3-5 business days</p>
        </div>
      </div>

      <div className={styles.item}>
        <CalendarIcon className={styles.icon} />
        <div>
          <p className={styles.label}>Shipping Address</p>
          <p className={styles.value}>
            123 Construction Ave
            <br />
            Builder City, BC 12345
            <br />
            United States
          </p>
        </div>
      </div>
    </div>
  );
};
