import type { RouteProps } from 'react-router';
import { ProductsPage } from '@/pages/Products';
import { CategoriesPage } from '@/pages/Categories';
import { DealsPage } from '@/pages/Deals';
import { AboutPage } from '@/pages/About';
import { CartPage } from '@/pages/Cart';
import { ProductPage } from '@/pages/Product';
import { routePaths } from '@/shared/config';
import { AppRoutes } from '@/shared/config/router/routerPaths.ts';

export const routesConfig: RouteProps[] = [
  {
    path: routePaths[AppRoutes.HOME],
    element: <ProductsPage />,
  },
  {
    path: routePaths[AppRoutes.PRODUCTS],
    element: <ProductsPage />,
  },
  {
    path: routePaths[AppRoutes.PRODUCT],
    element: <ProductPage />,
  },
  {
    path: routePaths[AppRoutes.CATEGORIES],
    element: <CategoriesPage />,
  },
  {
    path: routePaths[AppRoutes.DEALS],
    element: <DealsPage />,
  },
  {
    path: routePaths[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
  {
    path: routePaths[AppRoutes.CART],
    element: <CartPage />,
  },
];
