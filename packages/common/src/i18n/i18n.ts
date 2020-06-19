import ICU from "i18next-icu";
import en from "i18next-icu/locale-data/en";
import ja from "i18next-icu/locale-data/ja";
import zh from "i18next-icu/locale-data/zh";
import NextI18next from "next-i18next";
import {useTranslation as originalUseTranslation} from "react-i18next";

const use: unknown[] = [];
const icu = new ICU({});
icu.addLocaleData(en);
icu.addLocaleData(ja);
icu.addLocaleData(zh);
use.push(icu);

export const nextI18next = new NextI18next({
  browserLanguageDetection: true,
  defaultNS: "index",
  defaultLanguage: "en",
  otherLanguages: ["ja", "zh"],
  fallbackLng: "en",
  use,
});

export const includeDefaultNamespaces = (namespaces?: string[]): string[] => {
  const defaultNamespaces = ["index"];
  if (namespaces) {
    return defaultNamespaces.concat(namespaces);
  }
  return defaultNamespaces;
};

export const {
  appWithTranslation,
  i18n,
  withTranslation,
  Link,
  Trans,
} = nextI18next;

export const useTranslation = originalUseTranslation;
