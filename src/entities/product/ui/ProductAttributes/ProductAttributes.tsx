import styles from './ProductAttributes.module.scss';
import type { Attribute } from '@/entities/product';
import TruckIcon from '@/shared/assets/icons/Truck.svg?react';
import ShieldIcon from '@/shared/assets/icons/Shield.svg?react';
import BoxIcon from '@/shared/assets/icons/Box.svg?react';

interface ProductAttributesProps {
  attributes: Attribute[];
}

export const ProductAttributes = ({ attributes }: ProductAttributesProps) => {
  return attributes.map((attr) => {
    let Icon: React.FC<React.SVGProps<SVGSVGElement>> | null = null;
    let title = '';
    let description = '';

    switch (attr.key) {
      case 'delivery':
        Icon = TruckIcon;
        title = 'Fast Delivery';
        description = attr.value;
        break;

      case 'warranty':
        Icon = ShieldIcon;
        title = 'Warranty';
        description = attr.value;
        break;

      case 'quality':
        Icon = BoxIcon;
        title = 'Quality Assured';
        description = attr.value;
        break;

      default:
        return null;
    }

    return (
      <div key={attr.id} className={styles.item}>
        <div className={styles.icon}>
          <Icon />
        </div>

        <div className={styles.text}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
    );
  });
};
