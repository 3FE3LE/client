import { getRequestConfig } from 'next-intl/server';

import { SupportedLocale } from '@repo/ui/types';

import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment.
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as SupportedLocale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: await import(`../messages/${locale}.json`)
      .then((module) => module.default)
      .catch((error) => {
        console.error(`Failed to load messages for locale "${locale}":`, error);
        throw new Error(`Missing translation file for locale "${locale}"`);
      }),
  };
});
