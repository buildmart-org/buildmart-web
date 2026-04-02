import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

import Logo from '@/shared/assets/icons/Logo.svg?react';
import SearchIcon from '@/shared/assets/icons/Search.svg?react';
import CartIcon from '@/shared/assets/icons/Cart.svg?react';

import { Input } from '@/shared/ui/Input/Input.tsx';
import { routePaths } from '@/shared/config';
import clsx from 'clsx';
import { useSearch } from '@/widgets/Heading/model/useSearch.ts';

export const Header = () => {
  const { search, setSearch, onEnter } = useSearch();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={clsx(styles.wrapper)}>
          {/* Logo */}
          <Link to={routePaths['']} className={styles.logo}>
            <Logo className={styles.logoIcon} />
            <span className={styles.logoText}>BuildMart</span>
          </Link>

          {/* Navigation */}
          <nav className={styles.nav}>
            <Link to={routePaths.products}>Products</Link>
            <Link to={routePaths.categories}>Categories</Link>
            <Link to={routePaths.deals}>Deals</Link>
            <Link to={routePaths.about}>About</Link>
          </nav>

          {/* Search */}
          <div className={styles.search}>
            <Input
              placeholder="Search products..."
              value={search}
              onChange={setSearch}
              onEnter={onEnter}
              Icon={<SearchIcon />}
            />
          </div>

          {/* Cart */}
          <nav className={styles.nav}>
            <Link to={routePaths.cart}>
              <CartIcon className={styles.cart} />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
