import { Suspense } from 'react';
import { AppRouter } from '@/app/router';

function App() {
  return (
    <>
      <Suspense fallback={<></>}>
        <AppRouter />
      </Suspense>
    </>
  );
}

export { App };
