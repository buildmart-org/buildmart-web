import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routesConfig } from '@/shared/config';
import { PageLoader } from '@/widgets/PageLoader';
import { AppLayout } from '@/app/layouts';
import { NotFoundPage } from '@/pages/NotFound';

export const AppRouter = () => {
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
