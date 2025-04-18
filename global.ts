import type { Formats, Locale } from "~/i18n/request";
import type messages from "~/i18n/messages/en";

declare module "next-intl" {
  interface AppConfig {
    Locale: Locale;
    Messages: typeof messages;
    Formats: Formats;
  }
}
