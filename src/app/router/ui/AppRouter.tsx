import { Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { routesConfig } from '@/shared/config';
import { PageLoader } from '@/widgets/PageLoader';
import { AppLayout } from '@/app/layouts';
import { NotFoundPage } from '@/pages/NotFound';

export const AppRouter = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return (
    <Routes>
      <Route element={<AppLayout />}>
        {routesConfig.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense key={path} fallback={<PageLoader />}>
                {element}
              </Suspense>
            }
          />
        ))}
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
