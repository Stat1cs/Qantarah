import {getRequestConfig} from "next-intl/server";
import {isLocale} from "@/i18n/locales";
import {cookies, headers} from "next/headers";

export default getRequestConfig(async ({locale}) => {
  const cookieStore = await cookies();
  const headersList = await headers();

  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;
  const accept = headersList.get("accept-language") || "";
  const first = accept.split(",")[0]?.trim().toLowerCase() || "";

  const resolvedLocale =
    isLocale(locale ?? "")
      ? (locale as string)
      : isLocale(cookieLocale ?? "")
        ? (cookieLocale as string)
        : first.startsWith("ar")
          ? "ar"
          : "en";

  return {
    locale: resolvedLocale,
    messages: (await import(`../../messages/${resolvedLocale}.json`)).default
  };
});

