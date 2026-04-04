import styles from './ApplyPromoForm.module.scss';
import { Input, Button } from '@/shared/ui';

import { usePromocode } from '@/features/applyPromo/model/hooks/usePromocode.ts';

export const ApplyPromoForm = () => {
  const {
    draftPromocode,
    appliedPromocode,
    appliedCode,
    isPromocodeApplied,
    isLoading,
    inputRef,
    onKeyDown,
    onApply,
    onReset,
    onChange,
  } = usePromocode();

  return (
    <div className={styles.promo}>
      <h3>Have a promo code?</h3>
      <div className={styles.row}>
        <Input
          ref={inputRef}
          onKeyDown={onKeyDown}
          value={appliedCode ? appliedCode : draftPromocode}
          onChange={onChange}
          placeholder="Enter promo code"
          disabled={isPromocodeApplied}
        />
        <Button onClick={onApply} disabled={isPromocodeApplied || isLoading}>
          {isLoading ? 'Applying...' : 'Apply'}
        </Button>
        <Button theme={'primary-outline'} onClick={onReset}>
          Reset
        </Button>
      </div>
      {isPromocodeApplied && (
        <p className={styles.success}>
          Promo code "{appliedCode}" applied. You saved{' '}
          {appliedPromocode?.discount}%
        </p>
      )}
    </div>
  );
};
