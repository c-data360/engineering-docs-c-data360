import type { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Providers } from "@/components/providers";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { fontVariables } from "@/lib/font";

const metaByLocale: Record<string, Metadata> = {
  fr: {
    title: "Hub d'ingénierie",
    description:
      "Documentation technique interne - GitFlow, conventions de commits, process de PR et standards d'ingénierie.",
  },
  en: {
    title: "Engineering Hub",
    description:
      "Internal technical documentation - GitFlow, commit conventions, PR process and engineering standards.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return metaByLocale[locale] ?? metaByLocale.en;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "fr" | "en")) notFound();

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${fontVariables} h-full`}
      suppressHydrationWarning
    >
      <body className="h-full flex flex-col antialiased bg-background text-foreground">
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            <div className="flex-1 overflow-y-auto overflow-x-hidden">{children}</div>
            <Footer />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
