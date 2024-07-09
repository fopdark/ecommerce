import createMiddleware from 'next-intl/middleware';

import { AppConfig } from '@/utils/AppConfig';

export default createMiddleware({
  locales: AppConfig.locales,
  defaultLocale: AppConfig.defaultLocale,
  localePrefix: AppConfig.localePrefix,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/((?!_next|_vercel|.*\\..*).*)'],
};
