// import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/shared/types';

const localePrefix: any = 'never';

export const AppConfig = {
  name: 'Picaverse',
  locales: ['ko', 'en_US'],
  defaultLocale: 'ko',
  localePrefix,
  localeDetection: false,
};
