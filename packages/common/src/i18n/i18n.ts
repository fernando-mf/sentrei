import ICU from "i18next-icu";
import en from "i18next-icu/locale-data/en";
import ru from "i18next-icu/locale-data/ru";
import NextI18next from "next-i18next";
import {useTranslation as originalUseTranslation} from "react-i18next";

const use: unknown[] = [];
const icu = new ICU({});
icu.addLocaleData(ru);
icu.addLocaleData(en);
use.push(icu);

export const nextI18next = new NextI18next({
  browserLanguageDetection: true,
  defaultLanguage: "en",
  defaultNS: "common",
  fallbackLng: "en",
  otherLanguages: ["ja"],
  use,
});

export const includeDefaultNamespaces = (namespaces: string[]): string[] =>
  ["common", "index"].concat(namespaces);

export const {appWithTranslation, withTranslation, Link, Trans} = nextI18next;
export const useTranslation = originalUseTranslation;
