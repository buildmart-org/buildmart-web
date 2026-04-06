import styles from './HeaderActions.module.scss';

import SearchIcon from '@/shared/assets/icons/Search.svg?react';
import BurgerMenuIcon from '@/shared/assets/icons/BurgerMenu.svg?react';
import { HeaderCart } from '@/widgets/Header/ui/HeaderCart/HeaderCart.tsx';
import { Button } from '@/shared/ui';

interface HeaderActionsProps {
  onOpenSearch: () => void;
  onToggleMenu: () => void;
}

export const HeaderActions = (props: HeaderActionsProps) => {
  const { onOpenSearch, onToggleMenu } = props;

  return (
    <div className={styles.actions}>
      <Button
        theme={'ghost'}
        className={styles.mobileSearch}
        onClick={onOpenSearch}
        Icon={<SearchIcon />}
      ></Button>

      <HeaderCart />
      <Button
        theme={'ghost'}
        className={styles.burger}
        onClick={onToggleMenu}
        Icon={<BurgerMenuIcon />}
      ></Button>
    </div>
  );
};
