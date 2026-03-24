import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary, StoreProvider } from '@/app/providers';
import { App } from '@/app/App.tsx';
import '@/app/styles/index.scss';

createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
);
