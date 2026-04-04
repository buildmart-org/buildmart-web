import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux/hooks.ts';
import { selectCartPromocodeSelector } from '@/entities/cart/model/selectors/selectCartPromocodeSelector.ts';
import { validatePromocode } from '@/features/applyPromo/lib/validatePromocode.ts';
import { cartActions } from '@/entities/cart/model/slice/cartSlice.ts';
import { useApplyPromocodeMutation } from '@/entities/order';
import { showToast } from '@/shared/ui/Toast/lib/toastService.ts';
import { transformPromocode } from '@/features/applyPromo/lib/transformPromocode.ts';
import { useRef, useEffect } from 'react';

export const usePromocode = () => {
  const dispatch = useAppDispatch();
  const [draftPromocode, setDraftPromocode] = useState('');
  const appliedPromocode = useAppSelector(selectCartPromocodeSelector);
  const appliedCode = appliedPromocode?.promocode ?? '';
  const isPromocodeApplied = Boolean(appliedCode);

  const [applyPromo, { isLoading }] = useApplyPromocodeMutation();

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onApply = async () => {
    const validPromo = validatePromocode(draftPromocode);

    if (!validPromo) {
      showToast('Enter a valid promo code', 'warning');
      return;
    }

    const promo = await applyPromo({ promocode: validPromo }).unwrap();

    dispatch(cartActions.setPromocode(promo));
    showToast('Promocode successfully applied', 'success');
  };

  const onReset = () => {
    setDraftPromocode('');
    dispatch(cartActions.setPromocode(null));
    inputRef.current?.focus();
  };

  const onChange = (value: string) => {
    setDraftPromocode(transformPromocode(value));
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isPromocodeApplied) {
      onApply();
    }
  };

  return {
    draftPromocode,
    setDraftPromocode,
    appliedPromocode,
    appliedCode,
    isPromocodeApplied,
    isLoading,
    inputRef,
    onApply,
    onReset,
    onChange,
    onKeyDown,
  };
};
