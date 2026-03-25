export const AppRoutes = {
  HOME: '',
  PRODUCTS: 'products',
  PRODUCT: 'product:/id',
  CATEGORIES: 'categories',
  DEALS: 'deals',
  ABOUT: 'about',
  CART: 'cart',
  NOT_FOUND: 'not-found',
} as const;

type AppRoutesType = (typeof AppRoutes)[keyof typeof AppRoutes];

export const routePaths: Record<AppRoutesType, string> = {
  [AppRoutes.HOME]: '',
  [AppRoutes.PRODUCTS]: '/products',
  [AppRoutes.PRODUCT]: '/product:/id',
  [AppRoutes.CATEGORIES]: '/categories',
  [AppRoutes.DEALS]: '/deals',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.CART]: '/cart',

  [AppRoutes.NOT_FOUND]: '*',
};
