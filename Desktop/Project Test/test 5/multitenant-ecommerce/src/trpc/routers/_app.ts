import { createTRPCRouter } from '../init';

import { authRounter } from '@/modules/auth/server/procedures';
import { categoriesRouter } from '@/modules/categories/server/procedures';

export const appRouter = createTRPCRouter({
  auth: authRounter,
  categories: categoriesRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;