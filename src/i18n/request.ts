import { headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import type { Translations } from "~/i18n/type";
import type { Formats as NIFormats } from "next-intl";

export const locales = ["en", "it"] as const;
export type Locale = (typeof locales)[number];

const formats: NIFormats = {
  dateTime: {
    short: {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  },
  number: {
    precise: {
      maximumFractionDigits: 2,
    },
  },
  list: {
    enumeration: {
      style: "long",
      type: "conjunction",
    },
  },
};

export type Formats = typeof formats;

async function getLocaleFromRequest(): Promise<Locale> {
  const acceptLanguage = (await headers()).get("accept-language") ?? "";
  const accepted = acceptLanguage
    .split(",")
    .map((part) => (part.split(";")[0] ?? "").trim().toLowerCase());

  for (const lang of accepted) {
    const supportedLocale = locales.find((locale) => lang.startsWith(locale));
    if (supportedLocale) return supportedLocale;
  }

  return "en";
}
export default getRequestConfig(async () => {
  const locale: Locale = await getLocaleFromRequest();

  return {
    locale,
    formats,
    messages: (
      (await import(`./messages/${locale}.ts`)) as { default: Translations }
    ).default,
  };
});
