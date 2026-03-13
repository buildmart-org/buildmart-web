import type { RouteProps } from 'react-router';
import { AppRoutes, routePaths } from '@/shared/constants';
import { ProductsPage } from '@/pages/Products';
import { NotFoundPage } from '@/pages/NotFound';

export const routeConfig: RouteProps[] = [
  {
    path: routePaths[AppRoutes.HOME],
    element: <ProductsPage />,
  },
  {
    path: routePaths[AppRoutes.PRODUCTS],
    element: <ProductsPage />,
  },
  // {
  //   path: routePaths[AppRoutes.PRODUCT],
  //   element: <ProductsPage />,
  // },
  // {
  //   path: routePaths[AppRoutes.CATEGORIES],
  //   element: <CategoriesPage />,
  // },
  // {
  //   path: routePaths[AppRoutes.DEALS],
  //   element: <DealsPage />,
  // },
  // {
  //   path: routePaths[AppRoutes.ABOUT],
  //   element: <AboutPage />,
  // },
  // {
  //   path: routePaths[AppRoutes.CART],
  //   element: <CartPage />,
  // },
  {
    path: routePaths[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
];
