import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

import Logo from '@/shared/assets/icons/Logo.svg?react';

import SearchIcon from '@/shared/assets/icons/Search.svg?react';

import { Input } from '@/shared/ui/Input/Input.tsx';
import { routePaths } from '@/shared/config';
import clsx from 'clsx';
import { useSearch } from '@/widgets/Heading/model/useSearch.ts';
import { HeaderActions } from '@/widgets/Header/ui/HeaderActions/HeaderActions.tsx';
import { MobileMenu } from '@/widgets/Header/ui/MobileMenu/MobileMenu.tsx';
import { useMobileMenu } from '@/widgets/Header/model/hooks/useMobileMenu.ts';

export const Header = () => {
  const search = useSearch();
  const menu = useMobileMenu();

  return (
    <>
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
                value={search.search}
                onChange={search.setSearch}
                onEnter={search.onEnter}
                Icon={<SearchIcon />}
              />
            </div>
            <HeaderActions
              onOpenSearch={menu.openSearch}
              onToggleMenu={menu.toggle}
            />
          </div>
        </div>
      </header>
      <MobileMenu
        isOpen={menu.isOpen}
        search={search.search}
        setSearch={search.setSearch}
        onEnter={search.onEnter}
        onClose={menu.close}
      />
    </>
  );
};
