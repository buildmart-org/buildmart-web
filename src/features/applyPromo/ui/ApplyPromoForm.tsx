import styles from './ApplyPromoForm.module.scss';
import { Input, Button, useToast } from '@/shared/ui';
import { cartActions } from '@/entities/cart/model/slice/cartSlice.ts';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux/hooks.ts';
// import type { ApiDataError, RTKQueryError } from '@/shared/lib';
import {
  selectCartPromocodeSelector,
  useApplyPromocodeMutation,
} from '@/entities/order';
import { transformPromocode } from '@/features/applyPromo/lib/transformPromocode.ts';
import { validatePromocode } from '@/features/applyPromo/lib/validatePromocode.ts';

export const ApplyPromoForm = () => {
  const dispatch = useAppDispatch();
  const [applyPromo, { isLoading }] = useApplyPromocodeMutation();
  const { open } = useToast();

  const [draftPromocode, setDraftPromocode] = useState<string>('');
  const appliedPromocode = useAppSelector(selectCartPromocodeSelector);
  const appliedCode = appliedPromocode?.promocode ?? '';
  const isApplied = Boolean(appliedCode);

  const onApply = async () => {
    const validPromo = validatePromocode(draftPromocode);

    if (!validPromo) {
      open('Enter a valid promo code', 'warning');
      return;
    }

    const promo = await applyPromo({ promocode: validPromo }).unwrap();

    dispatch(cartActions.setPromocode(promo));
    open(`Promocode successfully applied`, 'success');
  };

  const onReset = () => {
    setDraftPromocode('');
    dispatch(cartActions.setPromocode(null));
  };

  return (
    <div className={styles.promo}>
      <h3>Have a promo code?</h3>
      <div className={styles.row}>
        <Input
          value={appliedCode ? appliedCode : draftPromocode}
          onChange={(value) => setDraftPromocode(transformPromocode(value))}
          placeholder="Enter promo code"
          disabled={isApplied}
        />
        <Button onClick={onApply} disabled={isApplied || isLoading}>
          {isLoading ? 'Applying...' : 'Apply'}
        </Button>
        <Button theme={'primary-outline'} onClick={onReset}>
          Reset
        </Button>
      </div>
      {isApplied && (
        <p className={styles.applied}>
          Promo code "{appliedCode}" applied. You saved{' '}
          {appliedPromocode?.discount}%
        </p>
      )}
    </div>
  );
};
