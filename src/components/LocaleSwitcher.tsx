"use client";

import Image from "next/image";
import {useLocale} from "next-intl";
import {usePathname, useRouter} from "next/navigation";
import {Locale} from "@/i18n/locales";

function setLocaleCookie(locale: Locale) {
  // next-intl middleware uses NEXT_LOCALE by default.
  document.cookie = `NEXT_LOCALE=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

export function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const currentLocale = useLocale() as Locale;
  const otherLocale: Locale = currentLocale === "ar" ? "en" : "ar";
  const label = otherLocale === "ar" ? "AR" : "EN";
  const flagSrc = otherLocale === "ar" ? "/flags/om.svg" : "/flags/gb.svg";
  const flagAlt = otherLocale === "ar" ? "Oman flag" : "UK flag";

  return (
    <button
      type="button"
      onClick={() => {
        setLocaleCookie(otherLocale);
        // Ensure the whole document (including <html dir>) updates reliably.
        window.location.href = pathname;
        router.refresh();
      }}
      className="inline-flex h-9 items-center gap-2 rounded-full border border-black/10 px-3 text-sm font-semibold text-[color:var(--color-q-blue)] hover:bg-black/[.03]"
      aria-label={`Switch language to ${otherLocale}`}
    >
      <Image
        src={flagSrc}
        alt={flagAlt}
        width={18}
        height={18}
        className="rounded-sm"
      />
      {label}
    </button>
  );
}

