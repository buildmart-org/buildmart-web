import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';
import { Outlet } from 'react-router-dom';

import styles from './AppLayout.module.scss';

export const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.main}>
        <div className="container">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};
