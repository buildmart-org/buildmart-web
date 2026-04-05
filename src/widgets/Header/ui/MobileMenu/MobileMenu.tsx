import styles from './MobileMenu.module.scss';

import { Input } from '@/shared/ui/Input/Input';
import { Link } from 'react-router-dom';
import { routePaths } from '@/shared/config';

import SearchIcon from '@/shared/assets/icons/Search.svg?react';
import clsx from 'clsx';

interface MobileMenuProps {
  isOpen: boolean;

  search: string;
  setSearch: (value: string) => void;
  onEnter: () => void;

  onClose: () => void;
}

export const MobileMenu = (props: MobileMenuProps) => {
  const { isOpen, search, setSearch, onEnter, onClose } = props;

  return (
    <div
      className={clsx(styles.mobileMenu, {
        [styles.open]: isOpen,
      })}
    >
      <div className={styles.mobileContent}>
        <div className="container">
          <div className={styles.mobileSearchInput}>
            <Input
              placeholder="Search products..."
              value={search}
              onChange={setSearch}
              onEnter={onEnter}
              autoFocus
              Icon={<SearchIcon />}
            />
          </div>

          <nav className={styles.mobileNav}>
            <Link to={routePaths.products} onClick={onClose}>
              Products
            </Link>
            <Link to={routePaths.categories} onClick={onClose}>
              Categories
            </Link>
            <Link to={routePaths.deals} onClick={onClose}>
              Deals
            </Link>
            <Link to={routePaths.about} onClick={onClose}>
              About
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
