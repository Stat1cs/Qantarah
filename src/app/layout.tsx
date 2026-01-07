import {NextIntlClientProvider} from "next-intl";
import {getLocale, getMessages, getTranslations} from "next-intl/server";
import {Inter, Noto_Kufi_Arabic} from "next/font/google";
import type {Metadata} from "next";
import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {isLocale, Locale} from "@/i18n/locales";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-kufi-arabic",
  weight: ["400", "500", "600", "700"]
});

export async function generateMetadata(): Promise<Metadata> {
  const rawLocale = await getLocale();
  const locale: Locale = isLocale(rawLocale ?? "") ? (rawLocale as Locale) : "en";
  const t = await getTranslations({locale});

  return {
    title: `${t("site.name")} — ${t("site.nameAr")}`,
    description: t("home.hero.subtitle")
  };
}

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const rawLocale = await getLocale();
  const locale: Locale = isLocale(rawLocale ?? "") ? (rawLocale as Locale) : "en";
  const messages = await getMessages();

  const dir = locale === "ar" ? "rtl" : "ltr";
  const fontVar = locale === "ar" ? "var(--font-noto-kufi-arabic)" : "var(--font-inter)";
  const bodyStyle = {"--font-app-sans": fontVar} as React.CSSProperties;

  return (
    <html lang={locale} dir={dir} className={`${inter.variable} ${notoKufiArabic.variable}`}>
      <body style={bodyStyle} className="min-h-dvh bg-[color:var(--color-background)]">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

