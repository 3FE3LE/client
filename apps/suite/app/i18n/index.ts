import { createInstance, i18n } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { GetStaticPropsContext } from 'next';
import { initReactI18next } from 'react-i18next/initReactI18next';

import { getOptions } from './settings';

// Asumiendo que tienes una función getOptions definida en algún lugar

type Namespace = string | undefined;

const initI18next = async (lng: string, ns: Namespace): Promise<i18n> => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`),
      ),
    )
    .init(getOptions(lng, ns));
  return i18nInstance;
};

interface UseTranslationOptions {
  keyPrefix?: string;
}

export async function useTranslation(
  lng: string,
  ns?: Namespace,
  options: UseTranslationOptions = {},
) {
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(
      lng,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix,
    ),
    i18n: i18nextInstance,
  };
}

export async function getTranslation(
  context: GetStaticPropsContext,
  ns: Namespace,
  options: UseTranslationOptions = {},
) {
  const lng = context.locale || context.defaultLocale || 'en';
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(
      lng,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix,
    ),
    i18n: i18nextInstance,
  };
}
