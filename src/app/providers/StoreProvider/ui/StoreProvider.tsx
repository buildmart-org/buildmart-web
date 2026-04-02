import type { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { createStore } from '@/app/store';

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children } = props;
  const store = createStore();

  return <Provider store={store}>{children}</Provider>;
};
