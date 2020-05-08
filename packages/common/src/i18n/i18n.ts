import ICU from "i18next-icu";
import en from "i18next-icu/locale-data/en";
import ru from "i18next-icu/locale-data/ru";
import {NextComponentType, NextPageContext} from "next";
import NextI18next from "next-i18next";
import {useTranslation as originalUseTranslation} from "react-i18next";

const use: any[] = [];
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

export const includeDefaultNamespaces = (namespaces: string[]) =>
  ["common", "index"].concat(namespaces);

export const appWithTranslation = nextI18next.appWithTranslation;
export const Trans = nextI18next.Trans;
export const useTranslation = originalUseTranslation;
export type I18nPage<P = {}> = NextComponentType<
  NextPageContext,
  {namespacesRequired: string[]},
  P & {namespacesRequired: string[]}
>;
