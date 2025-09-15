import { createTRPCRouter } from '../init';

import { authRounter } from '@/modules/auth/server/procedures';
import { productsRouter } from '@/modules/products/server/procedures';
import { categoriesRouter } from '@/modules/categories/server/procedures';

export const appRouter = createTRPCRouter({
  auth: authRounter,
  products: productsRouter,
  categories: categoriesRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;