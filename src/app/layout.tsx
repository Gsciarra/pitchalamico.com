import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import type { PropsWithChildren } from "react";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Pitcha L'Amico",
  description:
    "Fatti presentare o presenta un amico per aiutarlo a trovare l'anima gemella",
  icons: [{ rel: "icon", url: "/logo.svg" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default async function RootLayout({
  children,
}: Readonly<PropsWithChildren>) {
  const locale = await getLocale();

  return (
    <ClerkProvider>
      <html lang={locale} className={`${geist.variable}`}>
        <body>
          <NextIntlClientProvider>
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
